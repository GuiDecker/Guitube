import React from "react"
import { StyledRegisterVideo } from "./styles"
import { createClient } from "@supabase/supabase-js"

function useForm(propsDoForm) {
  const [values, setValues] = React.useState(propsDoForm.initialValues)
  return {
    values,
    handleChange: (evento) => {
      console.log(evento.target)
      const value = evento.target.value
      const name = evento.target.name
      console.log(evento.target.name)
      setValues({
        ...values,
        [name]: value,
      })
    },
    clearForm() {
      setValues({})
    },
  }
}
// url and key of supabse
const PROJECT_URL = "https://mzxogsfhkkdxqjoklzsz.supabase.co"
const PROJECT_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16eG9nc2Zoa2tkeHFqb2tsenN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk5MjM5MTgsImV4cCI6MTk4NTQ5OTkxOH0.UjSHWLKDvEZT10GjYvTMLXAx2fHfi1-cavByeBSntXc"
const supabase = createClient(PROJECT_URL, PROJECT_KEY)

// get youtube thumbnail from video url
function getThumbnail(url) {
  return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`
}

export default function RegisterVideo() {
  const formCadastro = useForm({
    initialValues: {
      titulo: "God of War",
      url: "https://www.youtube.com/watch?v=6fNUO23I_BA&t=2047shttps://www.youtube.com/watch?v=6fNUO23I_BA&t=2047s",
    },
  })
  const [formVisivel, setFormVisivel] = React.useState(false)

  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={() => setFormVisivel(true)}>
        +
      </button>
      {formVisivel ? (
        <form
          onSubmit={(evento) => {
            evento.preventDefault()
            console.log(formCadastro.values)

            supabase
              .from("video")
              .insert({
                title: formCadastro.values.titulo,
                url: formCadastro.values.url,
                thumb: getThumbnail(formCadastro.values.url),
                playlist: "jogos",
              })
              .then((happened) => {
                console.log(happened)
              })
              .catch((error) => {
                console.log(error)
              })

            setFormVisivel(false)
            formCadastro.clearForm()
          }}
        >
          <div>
            <button
              type="button"
              className="close-modal"
              onClick={() => setFormVisivel(false)}
            >
              X
            </button>
            <input
              placeholder="Título do video"
              name="titulo"
              value={formCadastro.values.titulo}
              onChange={formCadastro.handleChange}
            />
            <input
              placeholder="URL"
              name="url"
              value={formCadastro.values.url}
              onChange={formCadastro.handleChange}
            />
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      ) : null}
    </StyledRegisterVideo>
  )
}
