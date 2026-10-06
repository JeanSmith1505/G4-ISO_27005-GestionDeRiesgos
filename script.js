const $ = (s, c = document) => c.querySelector(s), $$ = (s, c = document) => [...c.querySelectorAll(s)];
const PARTES = ['Fundamentos', 'Historia y evolución', 'Características y alcance', 'El proceso', 'Ventajas y desafíos', 'Medición', 'Aplicación y cierre'];
const R = (i = 0, k = '') => `data-r${k ? '=' + k : ''} style="--i:${i}"`;

/* ===== Modales del ciclo ===== */
const M = [
    ['Establecer el contexto', 'Se define qué se protege y con qué reglas se medirá el riesgo.', ['Alcance y límites de la evaluación', 'Criterios de probabilidad, impacto y aceptación', 'Roles y responsables del proceso'], 'Alcance y criterios aprobados'],
    ['Identificar riesgos', 'Se buscan los eventos que podrían afectar la confidencialidad, integridad o disponibilidad.', ['Activos y sus dueños', 'Amenazas y vulnerabilidades', 'Controles ya existentes y consecuencias'], 'Lista de escenarios de riesgo'],
    ['Analizar riesgos', 'Se estima qué tan probable es cada escenario y cuánto daño causaría.', ['Escalas cualitativas, semicuantitativas o cuantitativas', 'Probabilidad × impacto', 'Apoyo en datos históricos y criterio experto'], 'Nivel de riesgo de cada escenario'],
    ['Evaluar riesgos', 'Cada nivel se compara con los criterios de aceptación definidos al inicio.', ['Decidir qué riesgos son tolerables', 'Ordenar por prioridad', 'Detectar los que requieren tratamiento'], 'Lista priorizada de riesgos'],
    ['Tratar riesgos', 'Se elige cómo responder a cada riesgo: modificar, retener, evitar o compartir.', ['Selección de controles y comparación con el Anexo A de ISO 27001', 'Declaración de aplicabilidad', 'Plan de tratamiento y aprobación del riesgo residual'], 'Plan de tratamiento aprobado'],
    ['Monitorear y comunicar', 'Transversal a todo el ciclo: se informa a las partes interesadas y se vigila el cambio.', ['Revisar riesgos, controles y criterios', 'Consultar y comunicar decisiones', 'Registrar y mejorar el proceso'], 'Informes y revisiones periódicas']];

/* ===== Diapositivas ===== */
const S = [
    {
        p: 1, t: 'Definición', type: 'rows', h: '¿Qué es la ISO/IEC 27005?', lead: 'Una guía internacional para gestionar los riesgos de seguridad de la información de forma sistemática y repetible.', img: [1, 'Escudo digital o candado sobre una red de datos, ilustración tecnológica en tonos azules.'], d: [
            ['Quién la publica', 'ISO e IEC, mediante el comité conjunto JTC 1/SC 27 de seguridad de la información.'],
            ['Qué ofrece', 'Orientación para establecer el contexto, valorar, tratar, comunicar y monitorear riesgos.'],
            ['Su papel', 'Apoya lo que exige ISO/IEC 27001 sobre evaluación y tratamiento de riesgos (cláusulas 6.1.2, 6.1.3, 8.2 y 8.3).'],
            ['Título actual', 'Su edición 2022 abarca seguridad de la información, ciberseguridad y protección de la privacidad.']]
    },
    {
        p: 1, t: 'Conceptos', type: 'cols', h: 'El vocabulario del riesgo', d: [
            ['Activo', 'Todo lo que tiene valor: información, software, hardware, personas y servicios.'],
            ['Amenaza', 'Causa potencial de un incidente, como malware, error humano o un desastre natural.'],
            ['Vulnerabilidad', 'Debilidad de un activo o de un control que una amenaza puede aprovechar.'],
            ['Impacto', 'Consecuencia para los objetivos del negocio si el riesgo se materializa.'],
            ['Probabilidad', 'Posibilidad de que ocurra el evento; se estima con datos históricos o criterio experto.'],
            ['Riesgo', 'Efecto de la incertidumbre sobre los objetivos; combina probabilidad e impacto.']]
    },
    {
        p: 1, t: 'Familia ISO 27000', type: 'rows', h: 'Dónde encaja en la familia', d: [
            ['ISO/IEC 27000', 'Vocabulario y visión general de los sistemas de gestión de seguridad (SGSI).'],
            ['ISO/IEC 27001', 'Requisitos para implantar y certificar un SGSI.'],
            ['ISO/IEC 27002', 'Catálogo de controles; 93 en la versión 2022.'],
            ['ISO/IEC 27003 y 27004', 'Guía de implementación y de medición del desempeño.'],
            ['ISO/IEC 27005', 'Cómo gestionar los riesgos que justifican los controles.'],
            ['ISO 31000', 'Principios generales de gestión de riesgos; base conceptual de la 27005.']]
    },
    {
        p: 2, t: 'Línea de tiempo', type: 'tl', h: 'Treinta años de evolución', lead: 'De una norma británica a una guía internacional de riesgos.', d: [
            ['1995', 'BS 7799', 'Primer estándar británico de gestión de seguridad de la información.'],
            ['2000', 'ISO/IEC 17799', 'ISO adopta la parte de buenas prácticas.'],
            ['2005', 'ISO/IEC 27001', 'Nace la serie 27000 con requisitos certificables.'],
            ['2008', 'ISO/IEC 27005', 'Primera edición; sustituye a la guía BS 7799-3:2006.'],
            ['2011', 'Segunda edición', 'Actualización y ajustes de terminología.'],
            ['2018', 'Tercera edición', 'Se alinea con ISO/IEC 27001:2013.'],
            ['2022', 'Cuarta edición', 'Se adapta a ISO/IEC 27001:2022 y a ISO 31000.']]
    },
    {
        p: 2, t: 'Por qué cambió', type: 'cols', h: 'Qué impulsó los cambios', img: [2, 'Línea de tiempo o evolución de normas ISO, o un collage de portadas de ediciones anteriores.'], d: [
            ['Nuevas amenazas', 'Ransomware, ataques a la cadena de suministro y servicios en la nube pedían escenarios más ágiles.'],
            ['Armonización', 'Las normas ISO de gestión comparten estructura y lenguaje, y eso facilita integrarlas.'],
            ['Gestión basada en riesgo', 'Las organizaciones necesitan decisiones priorizadas, no listas interminables de controles.'],
            ['Privacidad y ciberseguridad', 'El foco se amplía más allá de la información tradicional.']]
    },
    {
        p: 2, t: 'Edición 2022', type: 'cols', h: 'Qué cambió en la edición 2022', d: [
            ['Estructura', 'Se alinea con ISO 31000: marco de trabajo y proceso de gestión del riesgo.'],
            ['Enfoques', 'Describe dos caminos para identificar riesgos: por eventos y por activos.'],
            ['Anexos', 'Se reorganizan con ejemplos y técnicas de apoyo a la valoración.'],
            ['Alcance', 'Incorpora ciberseguridad y protección de la privacidad en el título.']]
    },
    {
        p: 3, t: 'Características', type: 'vs', h: 'Qué es y qué no es', d: [
            ['Una guía de buenas prácticas', 'Flexible: permite elegir método y herramientas', 'Iterativa y continua', 'Compatible con ISO 31000 y 27001', 'Aplicable a cualquier tamaño y sector'],
            ['No es certificable', 'No impone una metodología única', 'No es un catálogo de controles (eso es la 27002)', 'No reemplaza la decisión de la dirección sobre el apetito de riesgo']]
    },
    {
        p: 3, t: 'Alcance', type: 'rows', h: 'A quién sirve y cómo se usa', img: [3, 'Reunión de equipo de seguridad frente a una pantalla con un mapa de riesgos.'], d: [
            ['Organizaciones', 'Públicas o privadas, grandes o pequeñas, de cualquier sector.'],
            ['Con ISO 27001', 'Es la referencia para evaluar y tratar riesgos y para elaborar la declaración de aplicabilidad.'],
            ['Con otros marcos', 'Convive con NIST SP 800-30, ISO 31000 y metodologías como MAGERIT u OCTAVE.'],
            ['Sin certificación', 'Se puede usar sola para mejorar la gestión del riesgo, aunque no otorgue certificado.']]
    },
    {
        p: 3, t: 'Enfoques', type: 'cols', h: 'Dos enfoques para identificar riesgos', lead: 'La edición 2022 reconoce dos caminos y permite combinarlos.', d: [
            ['Basado en eventos', 'Parte de escenarios: quién o qué podría causar un incidente y con qué consecuencias. Es más estratégico y rápido.'],
            ['Basado en activos', 'Parte del inventario y revisa amenazas y vulnerabilidades de cada activo. Es más detallado y sistemático.'],
            ['Cómo combinarlos', 'Escenarios para el nivel directivo y activos para los sistemas más críticos.']]
    },
    { p: 4, t: 'Ciclo', type: 'ring', h: 'El ciclo de gestión del riesgo', lead: 'Seis etapas que se repiten: el resultado de cada una alimenta a la siguiente.' },
    {
        p: 4, t: 'Evaluación', type: 'cols steps', h: 'Evaluación del riesgo en tres pasos', d: [
            ['Identificar', 'Reconocer activos, amenazas, controles existentes, vulnerabilidades y consecuencias, y documentar cada escenario.'],
            ['Analizar', 'Estimar probabilidad e impacto con una escala cualitativa, semicuantitativa o cuantitativa para obtener el nivel de riesgo.'],
            ['Evaluar', 'Comparar cada nivel con los criterios de aceptación y ordenar los riesgos por prioridad.']]
    },
    {
        p: 4, t: 'Tratamiento', type: 'cols', h: 'Cuatro opciones de tratamiento', lead: 'Cada riesgo recibe una decisión justificada. Lo que queda después es el riesgo residual, que debe aprobar su dueño.', d: [
            ['Modificar', 'Reducir con controles. Ejemplo: activar MFA y cifrado.'],
            ['Retener', 'Aceptar con aprobación formal cuando el nivel es tolerable.'],
            ['Evitar', 'Eliminar la actividad que genera el riesgo. Ejemplo: dejar de guardar datos innecesarios.'],
            ['Compartir', 'Transferir parte del riesgo. Ejemplo: seguro cibernético o tercerización.']]
    },
    {
        p: 5, t: 'Ventajas', type: 'rows', h: 'Ventajas de aplicarla', img: [4, 'Gráfico ascendente o tablero de indicadores sobre un fondo de oficina moderna.'], d: [
            ['Decisiones con evidencia', 'Se prioriza según el riesgo real, no por intuición.'],
            ['Cumplimiento más simple', 'Respalda a ISO 27001 y a auditorías internas y externas.'],
            ['Inversión mejor dirigida', 'Cada control se justifica por el riesgo que reduce.'],
            ['Lenguaje común', 'Técnicos y directivos hablan del riesgo con los mismos términos.'],
            ['Menos incidentes', 'Se anticipan amenazas en vez de reaccionar.'],
            ['Mejora continua', 'El ciclo se repite y madura con cada vuelta.']]
    },
    {
        p: 5, t: 'Desafíos', type: 'cols', h: 'Desafíos y cómo superarlos', d: [
            ['Subjetividad', 'Estimar probabilidad e impacto depende del criterio de cada persona. Se resuelve con escalas definidas y varios evaluadores.'],
            ['Falta de inventario', 'Sin activos identificados el análisis queda incompleto. Se empieza por los más críticos.'],
            ['Poco compromiso directivo', 'Sin apoyo no hay recursos ni decisiones. Se presenta el riesgo en términos de negocio.'],
            ['Información desactualizada', 'Los riesgos cambian. Se fijan revisiones periódicas y ante cambios importantes.']]
    },
    {
        p: 5, t: 'Factores de éxito', type: 'rows', h: 'Factores de éxito', d: [
            ['Alcance claro', 'Delimitar qué se evalúa y por qué.'],
            ['Criterios acordados', 'Escalas de probabilidad, impacto y aceptación aprobadas por la dirección.'],
            ['Dueños de riesgo', 'Una persona responsable de cada riesgo.'],
            ['Registro de riesgos', 'Un documento vivo con estado, decisión y fecha de revisión.'],
            ['Comunicación constante', 'Informar a las partes interesadas en cada etapa.']]
    },
    { p: 6, t: 'Indicadores', type: 'kpi', h: 'Los números que respaldan la gestión de riesgos', lead: 'Datos reales del sector: lo que cuesta no gestionar el riesgo y cuánto crece la adopción de ISO/IEC 27001.' },
    { p: 6, t: 'Matriz', type: 'mx', h: 'Matriz de riesgo interactiva', lead: 'El nivel de cada escenario es el producto de su probabilidad por su impacto.' },
    {
        p: 6, t: 'Métricas', type: 'rows', h: 'Qué medir en la práctica', lead: 'La ISO/IEC 27004 orienta cómo medir el desempeño de la seguridad.', d: [
            ['Cobertura', 'Porcentaje de activos críticos con riesgo evaluado.'],
            ['Tratamiento', 'Porcentaje de riesgos con plan aprobado y cumplido a tiempo.'],
            ['Riesgo residual', 'Comparación frente al apetito de riesgo definido.'],
            ['Incidentes', 'Número y severidad por periodo.'],
            ['Velocidad', 'Tiempo medio de detección y de remediación.'],
            ['Indicadores de riesgo (KRI)', 'Señales tempranas, como parches críticos pendientes o intentos de acceso fallidos.']]
    },
    {
        p: 7, t: 'Caso práctico', type: 'cols steps', h: 'Un ejemplo completo', lead: 'Riesgo ilustrativo de una empresa que guarda datos de clientes.', img: [5, 'Servidor o centro de datos con un indicador de alerta en rojo cambiando a verde.'], d: [
            ['Activo y amenaza', 'Base de datos de clientes; amenaza de ransomware.'],
            ['Vulnerabilidad', 'Servidores sin parches y copias de seguridad conectadas a la red.'],
            ['Análisis', 'Probabilidad 4 × impacto 5 = 20: nivel crítico.'],
            ['Tratamiento', 'Modificar: parchar, activar MFA, crear copias fuera de línea y un plan de respuesta.'],
            ['Resultado', 'Probabilidad 2 × impacto 3 = 6: nivel medio. El dueño aprueba el riesgo residual.']]
    },
    {
        p: 7, t: 'Conclusiones', type: 'rows', h: 'Conclusiones', d: [
            ['Un lenguaje común', 'Convierte la inseguridad en riesgos que se pueden medir y comparar.'],
            ['Guía, no receta', 'Se adapta a cada organización y se complementa con ISO 27001.'],
            ['Proceso vivo', 'Su valor está en repetirlo y mejorarlo en cada ciclo.'],
            ['Mejores decisiones', 'Prioriza inversiones y justifica los controles ante la dirección.']]
    },
    { p: 7, t: 'Cierre', type: 'end' }];

/* ===== Renderizado ===== */
const cell = (a, b, i, t) => `<${t} ${R(i)}><h3>${a}</h3><p>${b}</p></${t}>`;
const B = {
    rows: s => `<ol class="adv">${s.d.map(([a, b], i) => `<li ${R(i + 2, 'l')}><b>${a}.</b> <span>${b}</span></li>`).join('')}</ol>`,
    cols: s => `<div class="${s.type}">${s.d.map(([a, b], i) => cell(a, b, i + 2, 'div')).join('')}</div>`,
    vs: s => `<div class="grid2 vs"><div><h3>Es</h3><ul class="yes">${s.d[0].map((x, i) => `<li ${R(i + 2, 'l')}>${x}</li>`).join('')}</ul></div><div><h3>No es</h3><ul class="no">${s.d[1].map((x, i) => `<li ${R(i + 3, 'l')}>${x}</li>`).join('')}</ul></div></div>`,
    tl: s => `<div class="tl"><div class="line"></div>${s.d.map(([y, a, b], i) => `<article style="--i:${i}"><b>${y}</b><h3>${a}</h3><p>${b}</p></article>`).join('')}</div>`,
    ring: () => `<div class="ring" id="ring" ${R(2, 'z')}><div class="core">Ciclo<br>continuo</div>${M.map((m, i) => `<span role="button" tabindex="0" data-m="${i}">${m[0]}</span>`).join('')}</div>`,
    kpi: () => `<div class="kpis">${[['US$ ', '4.99', 2, ' M', 'costo medio global de una brecha de datos en 2026, 12 % más que el año anterior'], ['', '247', 0, ' días', 'promedio para identificar y contener una brecha'], ['US$ ', '1.93', 2, ' M', 'menos por brecha en organizaciones que usan IA y automatización en seguridad'], ['≈', '97000', 0, '', 'certificados ISO/IEC 27001 en 2024, frente a 31 910 en 2018']].map(([a, n, d, u, t], i) => `<div ${R(i + 2)}><strong>${a}<span data-n="${n}" data-d="${d}">0</span>${u}</strong><p>${t}</p></div>`).join('')}</div><div class="bars"><p>Costo medio de una brecha según el tiempo que tarda en contenerse</p><div class="bar" style="--w:100%"><u></u><span>Más de 200 días · US$ 5,65 M</span></div><div class="bar after" style="--w:76.5%"><u></u><span>Hasta 200 días · US$ 4,32 M</span></div></div><small>Fuentes: IBM, Cost of a Data Breach Report 2026; ISO Survey 2018 y 2024. Son promedios globales, no una predicción para una organización concreta.</small>`,
    mx: () => `<div class="grid2"><div id="mx" ${R(2, 'z')}></div><div class="lvl" id="lvl">Niveles de riesgo<small>Horizontal: probabilidad (1 a 5). Vertical: impacto (5 arriba).</small><ul class="leg">${[['Bajo', '1 a 4', 2], ['Medio', '5 a 9', 7], ['Alto', '10 a 16', 12], ['Crítico', '17 a 25', 20]].map(([n, r, s]) => `<li><i style="background:hsl(${160 - s / 25 * 160} 80% 58%)"></i><b>${n}</b> ${r}</li>`).join('')}</ul></div></div>`,
    end: () => `<div class="thanks" ${R(2, 'z')}>Gracias.<br><small>Grupo 04 · ISO/IEC 27005</small></div>`
};
const IC = ['<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5 5-5"/>', '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>', '<path d="M4 7l8-4 8 4-8 4z"/><path d="M4 12l8 4 8-4M4 17l8 4 8-4"/>', '<path d="M20 12a8 8 0 1 1-2.5-5.8M20 4v4h-4"/>', '<path d="M3 17l6-6 4 4 8-8M15 7h6v6"/>', '<path d="M5 20V10M12 20V4M19 20v-7"/>', '<path d="M5 21V4M5 4h12l-2 4 2 4H5"/>'];
const DECO = p => `<div class="deco${p % 2 ? '' : ' alt'}" aria-hidden="true"><i></i><i></i><i></i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">${IC[p - 1]}</svg><b style="--r:19vmin"></b><b style="--r:14vmin;animation-delay:-3s"></b><b style="--r:9vmin;animation-delay:-6s"></b></div>`;
const fig = ([n, d]) => `<figure class="ph" ${R(3, 'z')}><img src="img/imagen${n}.jpg" alt="imagen${n}" onerror="this.parentNode.classList.add('miss')"><figcaption><b>(imagen${n})</b> ${d}</figcaption></figure>`;
$('#deck').innerHTML = S.map((s, i) => {
    const head = `<p class="who" data-r>Parte ${s.p} · ${PARTES[s.p - 1]}</p>${s.h ? `<h2 ${R(1)}>${s.h}</h2>` : ''}${s.lead ? `<p class="lead" ${R(2)}>${s.lead}</p>` : ''}`;
    const base = s.type.split(' ')[0], body = B[base](s), dc = (s.img || base === 'ring' || base === 'mx') ? '' : DECO(s.p);
    return `<section class="s${s.type === 'end' ? ' end' : ''}" data-t="${s.t}" data-part="${PARTES[s.p - 1]}" id="s${i + 1}">${dc}${s.img ? `<div class="grid2"><div>${head}${body}</div>${fig(s.img)}</div>` : head + body}</section>`;
}).join('');

/* ===== Portada ===== */
const title = $('#title');
title.innerHTML = [...title.textContent].map((c, k) => `<span style="--k:${k}">${c === ' ' ? '&nbsp;' : c}</span>`).join('');
const matrix = $('#matrix');
for (let r = 0; r < 5; r++)for (let c = 0; c < 5; c++)matrix.insertAdjacentHTML('beforeend', `<b style="--d:${r + c};background:hsl(${160 - (c + 4 - r) / 8 * 160} 80% 58%)"></b>`);
const dot = $('#dot'), lbl = $('#dotlbl'), states = [[4, 0, 'Riesgo inherente'], [2, 1, 'Aplicando controles'], [1, 3, 'Riesgo residual']]; let st = 0;
const moveDot = () => { const [x, y, t] = states[st++ % 3]; dot.style.setProperty('--x', x); dot.style.setProperty('--y', y); lbl.textContent = t };
moveDot(); setInterval(moveDot, 2600);

/* ===== Ciclo y modal ===== */
$$('#ring span').forEach((s, i, a) => s.style.setProperty('--a', `${360 / a.length * i}deg`));
document.body.insertAdjacentHTML('beforeend', '<div id="modal" role="dialog" aria-modal="true"><div class="box"><button class="x" aria-label="Cerrar">×</button><h3></h3><p></p><ul></ul><div class="out"></div></div></div>');
const modal = $('#modal'), openM = i => { const m = M[i]; $('h3', modal).textContent = `${i + 1}. ${m[0]}`; $('p', modal).textContent = m[1]; $('ul', modal).innerHTML = m[2].map(x => `<li>${x}</li>`).join(''); $('.out', modal).innerHTML = `<b>Resultado:</b> ${m[3]}`; modal.classList.add('on'); $('.x', modal).focus() };
const closeM = () => modal.classList.remove('on');
$('#ring').addEventListener('click', e => { const s = e.target.closest('[data-m]'); if (s) openM(+s.dataset.m) });
$('#ring').addEventListener('keydown', e => { if (e.key === 'Enter' && e.target.dataset.m) { e.stopPropagation(); openM(+e.target.dataset.m) } });
modal.addEventListener('click', e => { if (e.target === modal || e.target.className === 'x') closeM() });

/* ===== Matriz interactiva ===== */
const mx = $('#mx'), lv = s => s < 5 ? ['Bajo', 'Se retiene con monitoreo'] : s < 10 ? ['Medio', 'Se trata si hay recursos o se retiene con aprobación'] : s < 17 ? ['Alto', 'Requiere plan de tratamiento'] : ['Crítico', 'Tratamiento inmediato y seguimiento de la dirección'];
for (let i = 5; i >= 1; i--)for (let p = 1; p <= 5; p++) { const s = i * p; mx.insertAdjacentHTML('beforeend', `<button data-p="${p}" data-i="${i}" style="background:hsl(${160 - s / 25 * 160} 80% 58%)">${s}</button>`) }
const showLvl = e => { const b = e.target.closest('button'); if (!b) return; const s = b.dataset.p * b.dataset.i, [n, t] = lv(s); $$('#mx .sel').forEach(x => x.classList.remove('sel')); b.classList.add('sel'); $('#lvl').innerHTML = `${n}<small>Probabilidad ${b.dataset.p} × impacto ${b.dataset.i} = ${s}. ${t}.</small>` };
mx.addEventListener('mouseover', showLvl); mx.addEventListener('focusin', showLvl);
let touched = 0; mx.addEventListener('mouseover', () => touched = 1);
const demo = [[1, 1], [2, 3], [4, 3], [5, 5]]; let di = 0;
setInterval(() => { if (touched || !mx.closest('.s').classList.contains('in')) return; const [p, i] = demo[di++ % 4]; showLvl({ target: mx.querySelector(`[data-p="${p}"][data-i="${i}"]`) }) }, 2400);

/* ===== Progreso y navegación ===== */
const slides = $$('.s'), bar = $('#bar'), dots = $('#dots'), count = $('#count'); let current = 0;
slides.forEach(s => dots.insertAdjacentHTML('beforeend', `<a href="#${s.id}" data-t="${s.dataset.t}" aria-label="${s.dataset.t}"></a>`));
const dotEls = $$('a', dots);
const setCurrent = i => { current = i; dotEls.forEach((d, k) => d.classList.toggle('on', k === i)); count.textContent = `${i + 1} / ${slides.length}`; bar.style.width = `${(i + 1) / slides.length * 100}%` };
setCurrent(0);
const countUp = el => { const to = +el.dataset.n, t0 = performance.now(), f = now => { const p = Math.min((now - t0) / 1600, 1); const d = +el.dataset.d || 0, v = (to * (1 - (1 - p) ** 3)).toFixed(d); el.textContent = (d ? v.replace('.', ',') : (+v).toLocaleString('en-US').replace(/,/g, ' ')); if (p < 1) requestAnimationFrame(f) }; requestAnimationFrame(f) };
const io = new IntersectionObserver(es => es.forEach(e => { if (!e.isIntersecting) return; const s = e.target; s.classList.add('in'); setCurrent(slides.indexOf(s)); $$('[data-n]', s).forEach(n => { if (!n.done) { n.done = 1; countUp(n) } }) }), { rootMargin: '-40% 0px -40% 0px' });
slides.forEach(s => io.observe(s));
addEventListener('keydown', e => {
    if (e.key === 'Escape') return closeM();
    if (modal.classList.contains('on')) return;
    const nx = ['ArrowRight', 'ArrowDown', 'PageDown', ' '].includes(e.key), pv = ['ArrowLeft', 'ArrowUp', 'PageUp'].includes(e.key);
    if (!nx && !pv) return; e.preventDefault();
    slides[Math.max(0, Math.min(slides.length - 1, current + (nx ? 1 : -1)))].scrollIntoView({ behavior: 'smooth' });
});