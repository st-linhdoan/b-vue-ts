interface HelloWorldProps {
  msg: string
}

const HelloWorld = (props: HelloWorldProps) => {
  return (
    <div>
      <h1>{props.msg}</h1>
      <p>This is a functional TSX component in Nuxt 3!</p>
    </div>
  )
}

export default HelloWorld
