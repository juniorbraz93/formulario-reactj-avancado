import React, {Component} from "react";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      error: ''
    }
    this.Cadastrar = this.Cadastrar.bind(this)
  }

  Cadastrar(e) {
    const { name, email, password } = this.state
    if (name !== '' && email !== '' && password !== '') {
      alert(`Nome: ${name} \nEmail: ${email} \nSenha: ${password}`)   
    } else {
      this.setState({error: 'Formulario Incompleto'})
    }
    e.preventDefault()
  }s

  render() {
    return (
      <div>
        <h2>Novo usuario</h2>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.Cadastrar} >
          <label>Nome: </label>
          <input type='text' value={this.state.name}
          onChange={ (e) => this.setState({ name: e.target.value })} /> <br />
          <label>Email: </label>
          <input type='email' value={this.state.email}
          onChange={ (e) => this.setState({ email: e.target.value })} /> <br />
          <label>Senha: </label>
          <input type='password' value={this.state.password}
          onChange={ (e) => this.setState({ password: e.target.value })} /> <br />

          <button type="submit" >Cadastrar</button>
        </form>
      </div>
    )
  } 
}

export default App