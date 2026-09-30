/* ═══════════════════════════════════════════════════════════
   🔧 CONFIGURACIÓN CENTRAL DE LA BARBER
   Este archivo lo comparten TODAS las páginas
   ═══════════════════════════════════════════════════════════ */

// 🌐 URL del Web App de Google Apps Script
// Reemplaza 'TU_ID_AQUI' por tu URL real (termina en /exec)
window.API_URL = 'https://script.google.com/macros/s/AKfycbxP0uopgO32vBHzmoN6lV9l6Ymx60uBEyg0NFf9ed17knpIxv9qWFfjlZdqMSHF9D2WRQ/exec';

/* ⏰ Horarios cada 1h 30min: 6:00 AM → 4:30 PM */
window.HORAS_DISPONIBLES = [
  '06:00',   // 6:00 AM
  '07:30',   // 7:30 AM
  '09:00',   // 9:00 AM
  '10:30',   // 10:30 AM
  '12:00',   // 12:00 PM
  '13:30',   // 1:30 PM
  '15:00',   // 3:00 PM
  '16:30'    // 4:30 PM
];
