type Debug = {
  e: React.SyntheticEvent<HTMLImageElement, Event>
  status: string
  src: string
  alt: string
}

export const debugImg = ({ e, status, src, alt }: Debug) => {
  console.log(`Image ${status} ! src =>`, src)
  console.log(`Image ${status} ! alt =>`, alt)
  console.log(`Image ${status} ! e =>`, e)
}
