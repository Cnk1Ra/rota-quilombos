/* ============================================================
   ROTA DOS QUILOMBOS — INTERAÇÕES E ANIMAÇÕES
   ============================================================ */

(function () {
  'use strict';

  // ----------------------------------------------------------
  // DISCLAIMER POPUP — exibe na primeira visita da sessão
  // ----------------------------------------------------------
  function showDisclaimer() {
    if (sessionStorage.getItem('rq_disclaimer_seen') === '1') return;
    if (document.getElementById('disclaimerOverlay')) return;

    const overlay = document.createElement('div');
    overlay.className = 'disclaimer-overlay';
    overlay.id = 'disclaimerOverlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-labelledby', 'disclaimerTitle');
    overlay.innerHTML = `
      <div class="disclaimer">
        <div class="disclaimer__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="13"/>
            <circle cx="12" cy="16.5" r="0.6" fill="currentColor"/>
          </svg>
        </div>
        <span class="disclaimer__eyebrow">Apresentação · Mockup</span>
        <h2 class="disclaimer__title" id="disclaimerTitle">Este é um <em>protótipo visual.</em></h2>
        <p class="disclaimer__text">
          Apresentação para a <strong>Rota dos Quilombos</strong>. Imagens, textos e preços são <strong>ilustrativos</strong> — tudo pode ser editado.
        </p>
        <div class="disclaimer__cta">
          <button type="button" class="btn btn--gold btn--icon" id="disclaimerOk">Ver o protótipo</button>
        </div>
        <p class="disclaimer__signature">Abril de 2026</p>
      </div>
    `;
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => overlay.classList.add('is-open'));

    const close = () => {
      overlay.classList.remove('is-open');
      sessionStorage.setItem('rq_disclaimer_seen', '1');
      document.body.style.overflow = '';
      setTimeout(() => overlay.remove(), 500);
    };

    overlay.querySelector('#disclaimerOk').addEventListener('click', close);
    document.addEventListener('keydown', function escClose(e) {
      if (e.key === 'Escape') {
        close();
        document.removeEventListener('keydown', escClose);
      }
    });
  }

  // Espera DOM montado pra mostrar
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(showDisclaimer, 250));
  } else {
    setTimeout(showDisclaimer, 250);
  }

  // Expose pra reabrir manualmente se quiser (debug)
  window.RQShowDisclaimer = function() {
    sessionStorage.removeItem('rq_disclaimer_seen');
    showDisclaimer();
  };

  // ----------------------------------------------------------
  // HEADER scroll state
  // ----------------------------------------------------------
  const header = document.getElementById('header');
  let lastScrollY = 0;
  let ticking = false;

  function onScroll() {
    const y = window.scrollY;
    if (header) {
      if (y > 80) header.classList.add('is-scrolled');
      else header.classList.remove('is-scrolled');
    }
    lastScrollY = y;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });

  // ----------------------------------------------------------
  // MOBILE MENU
  // ----------------------------------------------------------
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('is-open');
      const isOpen = mobileMenu.classList.contains('is-open');
      menuToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }

  // ----------------------------------------------------------
  // INTERSECTION OBSERVER (fade-in + stagger)
  // ----------------------------------------------------------
  const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -60px 0px',
  };

  const reveal = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in, .stagger').forEach((el) => {
    reveal.observe(el);
    // Failsafe: se o elemento já está dentro do viewport ou se o usuário prefere
    // movimento reduzido, mostra imediatamente (e também pra screenshots/print).
    const rect = el.getBoundingClientRect();
    const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (inViewport || reducedMotion) {
      el.classList.add('is-visible');
    }
  });

  // Fallback: depois de 1.2s, força visibilidade em qualquer elemento
  // ainda escondido (caso usuário não role, screenshots, etc).
  setTimeout(() => {
    document.querySelectorAll('.fade-in:not(.is-visible), .stagger:not(.is-visible)').forEach((el) => {
      el.classList.add('is-visible');
    });
  }, 1200);

  // ----------------------------------------------------------
  // MANIFESTO — text reveal palavra por palavra
  // ----------------------------------------------------------
  const revealText = document.querySelector('.reveal-text');
  if (revealText) {
    // Quebra o conteúdo preservando os <em> em palavras envoltas em span
    const original = revealText.innerHTML;
    const tokenizer = /(<\/?em>|\S+|\s+)/g;
    const tokens = original.match(tokenizer) || [];
    let inEm = false;
    let wordIndex = 0;
    const out = tokens.map((tok) => {
      if (tok === '<em>') { inEm = true; return '<em>'; }
      if (tok === '</em>') { inEm = false; return '</em>'; }
      if (/^\s+$/.test(tok)) return tok;
      const delay = wordIndex * 35;
      wordIndex++;
      return `<span class="reveal-word" style="transition-delay:${delay}ms">${tok}</span>`;
    });
    revealText.innerHTML = out.join('');

    const textObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    textObserver.observe(revealText);
  }

  // ----------------------------------------------------------
  // ROTEIROS — carousel nav
  // ----------------------------------------------------------
  const track = document.getElementById('roteirosTrack');
  const navBtns = document.querySelectorAll('.roteiros__nav-btn');

  if (track && navBtns.length) {
    navBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const dir = btn.dataset.dir;
        const card = track.querySelector('.roteiro-card');
        if (!card) return;
        const cardWidth = card.offsetWidth + 24;
        track.scrollBy({
          left: dir === 'next' ? cardWidth * 1.5 : -cardWidth * 1.5,
          behavior: 'smooth',
        });
      });
    });
  }

  // ----------------------------------------------------------
  // SMOOTH SCROLL para anchors internos
  // ----------------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href');
      if (id === '#' || id.length < 2) return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ----------------------------------------------------------
  // FILTERS (página de roteiros)
  // ----------------------------------------------------------
  document.querySelectorAll('.filter-pill').forEach((pill) => {
    pill.addEventListener('click', () => {
      const group = pill.parentElement;
      group.querySelectorAll('.filter-pill').forEach((p) => p.classList.remove('is-active'));
      pill.classList.add('is-active');
    });
  });

  // ----------------------------------------------------------
  // MAPA — dados das 12 comunidades vêm de data/comunidades.js
  // ----------------------------------------------------------
  const COMUNIDADES = window.COMUNIDADES || {};

  function renderDetail(c) {
    const meta = [];
    if (c.mestre) meta.push(`<div class="detail-meta__item"><span class="detail-meta__label">Mestre · Mestra</span><span class="detail-meta__value">${c.mestre}</span></div>`);
    if (c.receptivo) meta.push(`<div class="detail-meta__item"><span class="detail-meta__label">Receptivo familiar</span><span class="detail-meta__value">${c.receptivo}</span></div>`);
    if (c.certificacao) meta.push(`<div class="detail-meta__item"><span class="detail-meta__label">Certificação</span><span class="detail-meta__value">${c.certificacao}</span></div>`);
    if (c.saber) meta.push(`<div class="detail-meta__item"><span class="detail-meta__label">Saber-âncora</span><span class="detail-meta__value">${c.saber}</span></div>`);

    const canto = c.canto
      ? `<blockquote class="detail-canto">${c.canto}<small>${c.cantoLegenda || 'Canto tradicional'}</small></blockquote>`
      : '';

    const pageBtn = c.page && c.page !== '#'
      ? `<a href="${c.page}" class="btn btn--outline" style="color: var(--branco-osso); border-color: rgba(244,239,230,0.4);">Mais informações →</a>`
      : '';

    return `
      <button class="detail-close" aria-label="Fechar">×</button>
      <div class="detail-grid">
        <div class="detail-image">
          <img src="${c.img}" alt="${c.nome}" />
          <span class="detail-image-tag">${c.tag}</span>
        </div>
        <div class="detail-content">
          <span class="detail-eyebrow">Comunidade</span>
          <h3 class="detail-name">${c.nome}</h3>
          <p class="detail-saber">${c.saber}</p>
          <p class="detail-text">${c.texto}</p>
          ${canto}
          <div class="detail-meta">${meta.join('')}</div>
          <div class="detail-actions">
            <button class="btn btn--gold btn--icon" data-cotacao
              data-context="visita a ${c.nome}"
              data-item="${c.nome} — ${c.municipio}"
              data-eyebrow="Cotar Visita"
              data-title="Cotar visita a <em>${c.nome}</em>"
              data-subtitle="Vivência guiada por Agente Local. Conte como você quer viver.">Cotar visita</button>
            ${pageBtn}
          </div>
        </div>
      </div>
    `;
  }

  // ----------------------------------------------------------
  // MAPA — sincronia pin ↔ sidebar + filtros + detail panel
  // ----------------------------------------------------------
  const mapaSection = document.getElementById('mapa');
  if (mapaSection) {
    const pins = mapaSection.querySelectorAll('.pin');
    const items = mapaSection.querySelectorAll('.mapa__list-item');
    const regions = mapaSection.querySelectorAll('.region');
    const filters = mapaSection.querySelectorAll('.mapa__filter');
    const detail = document.getElementById('mapaDetail');
    const detailCard = document.getElementById('mapaDetailCard');

    const setHover = (id, on) => {
      mapaSection.querySelectorAll(`[data-id="${id}"]`).forEach((el) => {
        el.classList.toggle('is-hover', on);
      });
      const target = mapaSection.querySelector(`.pin[data-id="${id}"]`);
      if (target) {
        const mun = target.dataset.mun;
        regions.forEach((r) => r.classList.toggle('is-highlighted', r.dataset.mun === mun && on));
      }
    };

    function pingPin(pin) {
      const NS = 'http://www.w3.org/2000/svg';
      const inner = pin.querySelector('.pin__inner-group');
      // 2 ondas concêntricas pra ficar mais orgânico
      [0, 180].forEach((delay) => {
        const ping = document.createElementNS(NS, 'circle');
        ping.setAttribute('cx', '0');
        ping.setAttribute('cy', '-22');
        ping.setAttribute('r', '4');
        ping.classList.add('pin__ping');
        // Insere ANTES do inner-group (sibling) — fica atrás do pin no z-order do SVG
        pin.insertBefore(ping, inner);
        setTimeout(() => ping.classList.add('is-active'), delay);
        setTimeout(() => ping.remove(), 1100 + delay);
      });
    }

    function selectCommunity(id) {
      const c = COMUNIDADES[id];
      if (!c) return;

      // Toggle: se já está selecionado, fecha
      if (detail.dataset.id === id && detail.classList.contains('is-open')) {
        closeDetail();
        return;
      }

      // Marca seleção visual
      pins.forEach((p) => p.classList.toggle('is-selected', p.dataset.id === id));
      items.forEach((i) => i.classList.toggle('is-active-detail', i.dataset.id === id));

      // Renderiza e abre
      detailCard.innerHTML = renderDetail(c);
      detail.dataset.id = id;
      detail.classList.add('is-open');
      detail.setAttribute('aria-hidden', 'false');

      // Bind close button
      const closeBtn = detailCard.querySelector('.detail-close');
      if (closeBtn) closeBtn.addEventListener('click', closeDetail);

      // Bind cotação trigger no botão dentro do painel
      const cotacaoBtn = detailCard.querySelector('[data-cotacao]');
      if (cotacaoBtn) {
        cotacaoBtn.addEventListener('click', (e) => {
          e.preventDefault();
          window.RotaQuilombos && window.RotaQuilombos.openCotacao({
            context: cotacaoBtn.dataset.context,
            item: cotacaoBtn.dataset.item,
            title: cotacaoBtn.dataset.title,
            eyebrow: cotacaoBtn.dataset.eyebrow,
            subtitle: cotacaoBtn.dataset.subtitle,
          });
        });
      }

      // Scroll suave pro painel
      setTimeout(() => {
        const rect = detail.getBoundingClientRect();
        const offset = window.scrollY + rect.top - 100;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }, 250);
    }

    function closeDetail() {
      detail.classList.remove('is-open');
      detail.setAttribute('aria-hidden', 'true');
      detail.dataset.id = '';
      pins.forEach((p) => p.classList.remove('is-selected'));
      items.forEach((i) => i.classList.remove('is-active-detail'));
    }

    pins.forEach((pin) => {
      pin.addEventListener('mouseenter', () => setHover(pin.dataset.id, true));
      pin.addEventListener('mouseleave', () => setHover(pin.dataset.id, false));
      pin.addEventListener('click', (e) => {
        e.preventDefault();
        pingPin(pin);
        setTimeout(() => selectCommunity(pin.dataset.id), 220);
      });
    });

    items.forEach((item) => {
      item.addEventListener('mouseenter', () => setHover(item.dataset.id, true));
      item.addEventListener('mouseleave', () => setHover(item.dataset.id, false));
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const pin = mapaSection.querySelector(`.pin[data-id="${item.dataset.id}"]`);
        if (pin) pingPin(pin);
        setTimeout(() => selectCommunity(item.dataset.id), 180);
      });
    });

    filters.forEach((btn) => {
      btn.addEventListener('click', () => {
        filters.forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        const f = btn.dataset.filter;

        if (f === 'all') {
          mapaSection.classList.remove('is-filtered');
          pins.forEach((p) => p.classList.remove('is-active'));
          items.forEach((i) => i.classList.remove('is-active'));
          regions.forEach((r) => r.classList.remove('is-active'));
        } else {
          mapaSection.classList.add('is-filtered');
          pins.forEach((p) => p.classList.toggle('is-active', p.dataset.mun === f));
          items.forEach((i) => i.classList.toggle('is-active', i.dataset.mun === f));
          regions.forEach((r) => r.classList.toggle('is-active', r.dataset.mun === f));
        }
        // Fecha detalhe se filtrou e o atual ficou oculto
        const currId = detail.dataset.id;
        if (currId && f !== 'all') {
          const curr = COMUNIDADES[currId];
          if (curr && curr.municipio.toLowerCase().replace(/[\s.]+/g, '-').replace('chapada-do-norte','chapada').replace('minas-novas','minas-novas') !== f) {
            // Não fecha automaticamente — usuário pode preferir manter
          }
        }
      });
    });
  }

  // ----------------------------------------------------------
  // EN clicado mostra alerta
  // ----------------------------------------------------------
  const enToggle = document.querySelector('.lang__option:not(.lang__option--active)');
  if (enToggle) {
    enToggle.addEventListener('click', () => {
      alert('English version coming soon — bilingual launch planned for Q1 2027.');
    });
  }

  // ----------------------------------------------------------
  // MODAL DE COTAÇÃO
  // ----------------------------------------------------------
  const WHATSAPP = '5531900000000'; // placeholder — Lupri define o número real

  // Picker de roteiros foi substituído por páginas dedicadas (roteiro.html?slug=X)
  // Modal agora abre só com form — quando aberto sem item específico, mostra link
  // pra catálogo de roteiros.

  function buildModal() {
    if (document.getElementById('cotacaoModal')) return;
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'cotacaoModal';
    overlay.setAttribute('aria-hidden', 'true');

    // Banner pra catálogo (mostra quando user abre modal sem roteiro específico)
    const catalogoBanner = `
      <div class="modal__catalogo-banner" data-modal-catalogo hidden>
        <p>Quer ver todos os roteiros com fotos, itinerário e o que está incluído?</p>
        <a href="roteiros.html" class="modal__catalogo-link">Ver os 10 roteiros →</a>
      </div>
    `;

    overlay.innerHTML = `
      <div class="modal" role="dialog" aria-labelledby="modalTitle">
        <button class="modal__close" aria-label="Fechar">×</button>
        <div class="modal__header">
          <span class="modal__eyebrow" data-modal-eyebrow>Cotação</span>
          <h3 class="modal__title" id="modalTitle" data-modal-title>Solicitar <em>cotação</em></h3>
          <p class="modal__subtitle" data-modal-subtitle>Conte um pouco sobre o que você procura. Respondemos em até 1 dia útil.</p>
        </div>
        <form class="modal__body" data-modal-form>
          ${catalogoBanner}
          <div class="modal__form">
            <div class="modal__field modal__field--full">
              <label for="cot-nome">Nome completo</label>
              <input type="text" id="cot-nome" name="nome" required />
            </div>
            <div class="modal__field">
              <label for="cot-email">E-mail</label>
              <input type="email" id="cot-email" name="email" required />
            </div>
            <div class="modal__field">
              <label for="cot-whats">WhatsApp</label>
              <input type="tel" id="cot-whats" name="whatsapp" placeholder="(31) 9 0000-0000" required />
            </div>
            <div class="modal__field">
              <label for="cot-pessoas">Quantas pessoas</label>
              <select id="cot-pessoas" name="pessoas" required>
                <option value="">Selecione</option>
                <option>1 pessoa</option>
                <option>2 pessoas</option>
                <option>3-4 pessoas</option>
                <option>5-6 pessoas</option>
                <option>Grupo (7+)</option>
              </select>
            </div>
            <div class="modal__field">
              <label for="cot-data">Data desejada</label>
              <input type="date" id="cot-data" name="data" />
            </div>
            <div class="modal__field modal__field--full">
              <label for="cot-mensagem">Mensagem</label>
              <textarea id="cot-mensagem" name="mensagem" placeholder="Conte sobre seu interesse, dúvidas ou pedidos especiais..."></textarea>
            </div>
          </div>
        </form>
        <div class="modal__footer">
          <button type="button" class="btn btn--gold btn--icon" data-modal-submit>Enviar Cotação</button>
          <button type="button" class="btn btn--outline" data-modal-whatsapp>Continuar no WhatsApp</button>
          <span class="modal__note">Mockup — formulário não funcional. Em produção, a Nzinga responde em até 24h.</span>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    const close = () => {
      overlay.classList.remove('is-open');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    overlay.querySelector('.modal__close').addEventListener('click', close);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('is-open')) close();
    });

    overlay.querySelector('[data-modal-submit]').addEventListener('click', () => {
      alert('Mockup: cotação seria enviada por email à Nzinga Turismo.\n\nEm produção, integração com Resend ou similar.');
      close();
    });

    overlay.querySelector('[data-modal-whatsapp]').addEventListener('click', () => {
      const ctx = overlay.dataset.context || 'roteiro';
      const item = overlay.dataset.item || '';
      const msg = encodeURIComponent(
        `Olá! Tenho interesse em ${ctx}${item ? ': ' + item : ''}. Gostaria de cotação.`
      );
      window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, '_blank');
    });
  }

  function openModal({ context = 'roteiro', item = '', title, eyebrow, subtitle } = {}) {
    buildModal();
    const overlay = document.getElementById('cotacaoModal');
    overlay.dataset.context = context;
    overlay.dataset.item = item;

    if (title) overlay.querySelector('[data-modal-title]').innerHTML = title;
    if (eyebrow) overlay.querySelector('[data-modal-eyebrow]').textContent = eyebrow;
    if (subtitle) overlay.querySelector('[data-modal-subtitle]').textContent = subtitle;

    // Pré-preenche mensagem se há um item específico
    const msgField = overlay.querySelector('#cot-mensagem');
    if (msgField && item) {
      msgField.value = `Tenho interesse em: ${item}. `;
    } else if (msgField) {
      msgField.value = '';
    }

    // Mostra banner do catálogo só se NÃO tem item específico
    const catalogoBanner = overlay.querySelector('[data-modal-catalogo]');
    if (catalogoBanner) {
      catalogoBanner.hidden = !!item;
    }

    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  // Conectar todos os triggers — captura na fase capture pra rodar ANTES
  // do smooth-scroll handler (que também ouve em a[href^="#"])
  function bindCotacaoTrigger(trigger) {
    if (trigger.dataset.cotacaoBound === '1') return;
    trigger.dataset.cotacaoBound = '1';
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      openModal({
        context: trigger.dataset.context || 'roteiro',
        item: trigger.dataset.item || '',
        title: trigger.dataset.title,
        eyebrow: trigger.dataset.eyebrow,
        subtitle: trigger.dataset.subtitle,
      });
    }, { capture: true });
  }

  document.querySelectorAll('[data-cotacao]').forEach(bindCotacaoTrigger);

  // Delegação global pra qualquer botão data-cotacao adicionado dinamicamente
  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-cotacao]');
    if (!t || t.dataset.cotacaoBound === '1') return;
    e.preventDefault();
    e.stopImmediatePropagation();
    openModal({
      context: t.dataset.context || 'roteiro',
      item: t.dataset.item || '',
      title: t.dataset.title,
      eyebrow: t.dataset.eyebrow,
      subtitle: t.dataset.subtitle,
    });
  }, { capture: true });

  // Expose globally for inline use if needed
  window.RotaQuilombos = { openCotacao: openModal };
})();
