interface INavbar {
  module?: "rifamax" | "x100" | "50/50"
}

function Navbar({ module }: INavbar) {
  return (
    <div>{ module }</div>
  )
}

export default Navbar