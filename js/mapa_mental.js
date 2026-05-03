const CX = 900;
const CY = 600;
const BR = 310;
const OD = 195;
const PS = 62;
const STEP = 360 / 7;

const branches = [
  {
    id: 1,
    label: 'Definición',
    cls: 'c1',
    color: '#ff8787',
    angle: -90,
    childSpacing: 136,
    children: [
      'Disciplina del\ndesarrollo SW',
      'Identificar\nrequisitos',
      'Analizar\nrequisitos',
      'Documentar\nrequisitos',
      'Validar\nrequisitos',
    ],
  },
  {
    id: 2,
    label: 'Tipos de\nRequisitos',
    cls: 'c2',
    color: '#ffa94d',
    angle: -90 + STEP * 1,
    children: [
      'Funcionales\n(qué hace)',
      'No funcionales\n(rend. / seg.)',
      'Requisitos\ndel usuario',
      'Requisitos\ndel sistema',
    ],
  },
  {
    id: 3,
    label: 'Fuentes de\nRequisitos',
    cls: 'c3',
    color: '#ffe066',
    angle: -90 + STEP * 2,
    children: [
      'Usuarios',
      'Clientes',
      'Stakeholders',
      'Documentación\nexistente',
      'Sistemas\nprevios',
      'Normativas\nlegales',
    ],
  },
  {
    id: 4,
    label: 'Proceso de\nIngeniería de\nRequisitos',
    cls: 'c4 wide',
    color: '#69db7c',
    angle: -90 + STEP * 3,
    childSpacing: 88,
    children: [
      'Elicitación',
      'Análisis',
      'Especificación',
      'Validación',
      'Gestión de\nrequisitos',
    ],
  },
  {
    id: 5,
    label: 'Técnicas de\nRecolección',
    cls: 'c5',
    color: '#74c0fc',
    angle: -90 + STEP * 4,
    childSpacing: 96,
    children: [
      'Entrevistas',
      'Encuestas',
      'Observación',
      'Prototipos',
      'Casos de uso',
    ],
  },
  {
    id: 6,
    label: 'Buenos\nRequisitos',
    cls: 'c6',
    color: '#da77f2',
    angle: -90 + STEP * 5,
    children: [
      'Claros',
      'Consistentes',
      'Verificables',
      'Completos',
      'Viables',
    ],
  },
  {
    id: 7,
    label: 'Gestión de\nRequisitos',
    cls: 'c7',
    color: '#f783ac',
    angle: -90 + STEP * 6,
    children: [
      'Control de\ncambios',
      'Trazabilidad',
      'Versionado',
    ],
  },
];

const definiciones = {
  'Ingeniería de Requisitos': 'Disciplina que identifica, analiza, documenta, valida y gestiona los requisitos de un sistema de software.',
  'Definición': 'Explica qué es la ingeniería de requisitos y cuál es su papel dentro del desarrollo de software.',
  'Disciplina del desarrollo SW': 'Área del desarrollo de software encargada de comprender qué necesita el sistema antes de construirlo.',
  'Identificar requisitos': 'Actividad que descubre necesidades, expectativas, restricciones y objetivos de los usuarios y stakeholders.',
  'Analizar requisitos': 'Proceso de revisar, ordenar y aclarar requisitos para detectar conflictos, vacíos o ambigüedades.',
  'Documentar requisitos': 'Registro claro y estructurado de los requisitos para que puedan ser consultados, revisados y desarrollados.',
  'Validar requisitos': 'Comprobación de que los requisitos representan correctamente las necesidades reales del cliente y los usuarios.',
  'Tipos de Requisitos': 'Clasificación de los requisitos según lo que describen: funciones, cualidades, usuarios o detalles del sistema.',
  'Funcionales (qué hace)': 'Describen las acciones, servicios o comportamientos que el sistema debe realizar.',
  'No funcionales (rend. / seg.)': 'Definen cualidades del sistema, como rendimiento, seguridad, disponibilidad, usabilidad o confiabilidad.',
  'Requisitos del usuario': 'Necesidades expresadas desde el punto de vista de las personas que usarán o solicitarán el sistema.',
  'Requisitos del sistema': 'Especificaciones técnicas y detalladas que guían la construcción del software.',
  'Fuentes de Requisitos': 'Origen de la información usada para descubrir y definir lo que el sistema debe cumplir.',
  'Usuarios': 'Personas que interactúan directamente con el sistema para realizar tareas o alcanzar objetivos.',
  'Clientes': 'Personas u organizaciones que solicitan, financian o aprueban el desarrollo del sistema.',
  'Stakeholders': 'Personas o grupos interesados o afectados por el sistema, directa o indirectamente.',
  'Documentación existente': 'Material previo, manuales, reportes o procesos que ayudan a comprender el contexto del sistema.',
  'Sistemas previos': 'Aplicaciones anteriores o similares que sirven como referencia para definir mejoras y requisitos.',
  'Normativas legales': 'Leyes, estándares o regulaciones que el sistema debe cumplir.',
  'Proceso de Ingeniería de Requisitos': 'Conjunto de actividades para obtener, analizar, especificar, validar y gestionar los requisitos de un sistema.',
  'Elicitación': 'Actividad de obtener información de usuarios, clientes y otras fuentes para descubrir requisitos.',
  'Análisis': 'Evaluación de requisitos para priorizarlos, resolver conflictos y hacerlos comprensibles.',
  'Especificación': 'Descripción formal y organizada de los requisitos que debe cumplir el sistema.',
  'Validación': 'Revisión con los interesados para confirmar que los requisitos son correctos, completos y útiles.',
  'Gestión de requisitos': 'Control de cambios, versiones y trazabilidad de los requisitos durante el proyecto.',
  'Técnicas de Recolección': 'Métodos usados para obtener información necesaria para definir los requisitos.',
  'Entrevistas': 'Técnica de recolección mediante conversación directa con usuarios, clientes o expertos.',
  'Encuestas': 'Instrumentos con preguntas estructuradas para recopilar información de varias personas.',
  'Observación': 'Técnica que consiste en mirar cómo los usuarios realizan sus tareas en un contexto real.',
  'Prototipos': 'Representaciones tempranas del sistema que ayudan a validar ideas y descubrir requisitos.',
  'Casos de uso': 'Descripciones de interacciones entre usuarios y el sistema para lograr un objetivo.',
  'Buenos Requisitos': 'Características que hacen que un requisito sea útil, claro y posible de verificar.',
  'Claros': 'Requisitos redactados de forma comprensible y sin ambigüedades.',
  'Consistentes': 'Requisitos que no se contradicen entre sí ni con las reglas del proyecto.',
  'Verificables': 'Requisitos que pueden comprobarse mediante pruebas, revisión o medición.',
  'Completos': 'Requisitos que incluyen toda la información necesaria para ser entendidos y desarrollados.',
  'Viables': 'Requisitos que pueden implementarse con los recursos, tiempo y tecnología disponibles.',
  'Control de cambios': 'Proceso para evaluar, aprobar y registrar modificaciones en los requisitos.',
  'Trazabilidad': 'Capacidad de seguir un requisito desde su origen hasta su implementación y pruebas.',
  'Versionado': 'Registro de diferentes versiones de los requisitos para controlar su evolución.',
};

const toRad = angle => angle * Math.PI / 180;

const canvasWrapper = document.getElementById('canvas-wrapper');
const svg = document.getElementById('svg-layer');
const modalOverlay = document.getElementById('modal-overlay');
const modalTitle = document.getElementById('modal-title');
const modalDefinition = document.getElementById('modal-definition');
const modalClose = document.getElementById('modal-close');
const starsEl = document.getElementById('stars');

function getNodeName(text) {
  return text
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/\n/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function makeNode(classes, text, x, y) {
  const div = document.createElement('div');
  div.className = `node ${classes}`.trim();
  div.style.left = `${x}px`;
  div.style.top = `${y}px`;
  div.dataset.nodo = getNodeName(text);
  div.innerHTML = text.replace(/\n/g, '<br>');
  div.addEventListener('click', () => openModal(div.dataset.nodo));
  canvasWrapper.appendChild(div);
  return div;
}

function bezier(x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const c1x = x1 + dx * 0.42;
  const c1y = y1 + dy * 0.08;
  const c2x = x2 - dx * 0.42;
  const c2y = y2 - dy * 0.08;
  return `M${x1},${y1} C${c1x},${c1y} ${c2x},${c2y} ${x2},${y2}`;
}

function addLine(x1, y1, x2, y2, color, className) {
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', bezier(x1, y1, x2, y2));
  path.setAttribute('stroke', color);
  path.setAttribute('class', className);
  svg.appendChild(path);
}

function openModal(nodeName) {
  modalTitle.textContent = nodeName;
  modalDefinition.textContent = definiciones[nodeName] || 'Definición no disponible para este concepto.';
  modalOverlay.classList.add('visible');
  modalOverlay.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  modalOverlay.classList.remove('visible');
  modalOverlay.setAttribute('aria-hidden', 'true');
}

function getCurrentStyles() {
  return Array.from(document.styleSheets)
    .map(styleSheet => {
      try {
        return Array.from(styleSheet.cssRules)
          .map(rule => rule.cssText)
          .join('\n');
      } catch (error) {
        return '';
      }
    })
    .filter(Boolean)
    .join('\n\n');
}

function downloadHtml() {
  const html = document.documentElement.cloneNode(true);
  const head = html.querySelector('head');
  const body = html.querySelector('body');
  const button = html.querySelector('#download-html');

  html.querySelectorAll('link[rel="stylesheet"]').forEach(link => link.remove());
  html.querySelectorAll('script[src]').forEach(script => script.remove());

  const style = document.createElement('style');
  style.textContent = getCurrentStyles();
  head.appendChild(style);

  if (button) button.remove();

  const script = document.createElement('script');
  script.textContent = `
const definiciones = ${JSON.stringify(definiciones)};
const modalOverlay = document.getElementById('modal-overlay');
const modalTitle = document.getElementById('modal-title');
const modalDefinition = document.getElementById('modal-definition');
const modalClose = document.getElementById('modal-close');

function openModal(nodeName) {
  modalTitle.textContent = nodeName;
  modalDefinition.textContent = definiciones[nodeName] || 'DefiniciÃ³n no disponible para este concepto.';
  modalOverlay.classList.add('visible');
  modalOverlay.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  modalOverlay.classList.remove('visible');
  modalOverlay.setAttribute('aria-hidden', 'true');
}

document.querySelectorAll('.node').forEach(node => {
  node.addEventListener('click', () => openModal(node.dataset.nodo));
});
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', event => {
  if (event.target === modalOverlay) closeModal();
});
`;
  body.appendChild(script);

  const content = `<!DOCTYPE html>\n${html.outerHTML}`;
  const blob = new Blob([content], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');

  link.href = url;
  link.download = 'mapa_mental.html';
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function createStars() {
  for (let i = 0; i < 130; i++) {
    const star = document.createElement('div');
    const size = Math.random() * 1.9 + 0.4;

    star.className = 'star';
    star.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random() * 100}%;
      top:${Math.random() * 100}%;
      --d:${(Math.random() * 3 + 2).toFixed(1)}s;
      --o:${(Math.random() * 0.45 + 0.12).toFixed(2)};
      animation-delay:${(Math.random() * 5).toFixed(1)}s;
    `;
    starsEl.appendChild(star);
  }
}

function renderMindMap() {
  const centerNode = makeNode('', 'Ingeniería<br>de<br>Requisitos', CX, CY);
  centerNode.id = 'node-center';

  branches.forEach(branch => {
    const angle = toRad(branch.angle);
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const bx = CX + BR * cos;
    const by = CY + BR * sin;

    addLine(CX, CY, bx, by, branch.color, 'connector-branch');
    makeNode(`branch-node ${branch.cls}`, branch.label, bx, by);

    const totalChildren = branch.children.length;
    const qx = CX + (BR + OD) * cos;
    const qy = CY + (BR + OD) * sin;
    const px = -sin;
    const py = cos;

    branch.children.forEach((child, index) => {
      const offset = (index - (totalChildren - 1) / 2) * (branch.childSpacing || PS);
      const sx = qx + offset * px;
      const sy = qy + offset * py;

      addLine(bx, by, sx, sy, branch.color, 'connector-sub');
      makeNode(`sub-node ${branch.cls}`, child, sx, sy);
    });
  });
}

document.getElementById('download-html').addEventListener('click', downloadHtml);
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', event => {
  if (event.target === modalOverlay) closeModal();
});

createStars();
renderMindMap();
