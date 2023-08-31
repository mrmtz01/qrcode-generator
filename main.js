const qr = qrcode(0, "L")

const input = document.querySelector("input")
const button = document.querySelector("button")

button.addEventListener("click", () => {
  const url = input.value

  qr.addData(url)

  qr.make()

  const imageQR = qr.createDataURL()

  document.querySelector("img").src = qr.createDataURL()

})