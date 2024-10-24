addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
  })
  
  async function handleRequest(request) {
    const url = new URL(request.url)
  
    // กำหนด API URL ของ Google Apps Script ตามเส้นทางที่ผู้ใช้งานเรียก
    let apiUrl = ''
    if (url.pathname.startsWith('/nakagame/v1/medal-ranking')) {
      apiUrl = 'https://script.google.com/macros/s/AKfycbyN-fjtDhtj6IX5BtwgnRXX2NumaCjSmFqcS6ctFSEZFnbp3VYJNTozI5-txzEJEL0/exec'
    } else if (url.pathname.startsWith('/nakagame/v1/compet-result')) {
      apiUrl = 'https://script.google.com/macros/s/AKfycbxAI-0Xi5Rpk_PhkZSzCwZk8iedh3nL8fy6-FN2G5IQmwfy8GQS9pJoq2V4BupS5WUm/exec'
    } else if (url.pathname.startsWith('/nakagame/v1/sum-compet-result')) {
      apiUrl = 'https://script.google.com/macros/s/AKfycbxhqtUmAWdRfi4FXP-PgI5qLX8wqWFrJV_UsAzbvE98gOaGLPFvgn0hGwSY3ahNLLzsfg/exec'
    } else {
      return new Response('API not found', { status: 404 })
    }
  // ส่งคำขอไปยัง Google Apps Script API
  const apiResponse = await fetch(apiUrl, {
    method: request.method,
    headers: request.headers,
  })

  // ดึงข้อมูลจาก Google Apps Script API
  const data = await apiResponse.text()

  // คืนค่าพร้อมกับส่วนหัว CORS
  return new Response(data, {
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': 'https://nakagame.bn-sc.cloud', // ระบุโดเมนที่อนุญาต
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', // กำหนดวิธีการที่อนุญาต
      'Access-Control-Allow-Headers': 'Content-Type', // กำหนด headers ที่อนุญาต
    },
  })
}


  // Release2 Nakagame API 24/10/2024
  