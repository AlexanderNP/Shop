export function popUpScipt() {
  const btnChatOpen = document.querySelector('.btn--form-product')

  const chat = document.querySelector('.popup')

  const btnChatClose = document.querySelector('.popup__close')

  const body = document.body

  const chatOpen = () => {
    chat.classList.add('show--popup')
    body.classList.add('body--pop')
  }

  const chatClose = () => {
    chat.classList.remove('show--popup')
    body.classList.remove('body--pop')
    location.reload();
  }

  btnChatOpen.addEventListener('click', (e) => {
    e.preventDefault()
    window.localStorage.clear()
    chatOpen()
  })

  btnChatClose.addEventListener('click', () => {
    chatClose()
  })

  chat.addEventListener('click', (event) => {
    const target = event.target
    console.log(target)
    if (target && target.classList.contains('popup__container')) {
      chatClose()
    }
  })

  document.addEventListener('keydown', (event) => {
    if (event.code === "Escape") {
      chatClose()
    }
  })
}