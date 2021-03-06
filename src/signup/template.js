var yo = require('yo-yo');
var landing = require('../landing');

var signupForm = yo`<div class="col s12 m7">
						<div class="row">
							<div class="signup-box">
								<h1 class="platzigram">photogram</h1>
								<form class="signup-form">
									<h2>registrate </h2>
									<div class="section">
										<a href="" class="btn btn-fb hide-on-small-only">Iniciar Seccion en Facebook</a>
										<a href="" class="btn btn-fb hide-on-med-and-up"><i class="fa fa-facebook-official" aria-hidden="true"></i> Iniciar Seccion</a>
									</div>
									<div class="divider"></div>
									<div class="section">
										<input type="email" name="email" placeholder="Correo Eletronico">
										<input type="text" name="name" placeholder="nombre Completo">
										<input type="text" name="username" placeholder="Nombre de Usuario">
										<input type="password" name="password" placeholder="contraseña">
										<button class="btn waves-effect wave-light signup" type="submit">Registrate</button>
									</div>
								</form>
							</div>
						</div>
						<div class="row">
							<div class="login-box">
								¿Tienes una Cuenta? <a href="/signin">Entrar</a>
							</div>
						</div>
					</div>`;

module.exports = landing(signupForm);