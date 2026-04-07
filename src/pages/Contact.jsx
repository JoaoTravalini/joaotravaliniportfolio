import React, { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: ''})
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = () => {};
  const handleFocus = () => {};
  const handleBlur = () => {};

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Entre em contato</h1>

        <form className="w-full flex flex-col gap-7 mt-14">
          <label className="text-black-500 font-semibold">
            Nome
            <input type="text" name="name" className="input" placeholder="Nome" required value={form.name} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
          </label>
          <label className="text-black-500 font-semibold">
            E-mail
            <input type="email" name="email" className="input" placeholder="E-mail" required value={form.email} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
          </label>
          <label className="text-black-500 font-semibold">
            Mensagem
            <textarea name="message" rows={4} className="textarea" placeholder="Digite aqui..." required value={form.message} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
          </label>
          <button type="submit" className="btn" disabled={isLoading} onFocus={handleFocus} onBlue={handleBlur}>
            {isLoading ? 'Enviando...' : 'Enviar mensagem'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact