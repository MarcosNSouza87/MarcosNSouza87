import Header from '../../../components/Header'
import { AboutContainer } from './styles'
import './styles.ts'
export default function AboutPage() {
	return (
		<AboutContainer className="about">
			<section className="sections">
				<Header titlePage="" subTitlePage="Sobre Mim" />
				<div className="aboutme">
					<p>
						Trabalho com react e react native sempre visando adquirir experiência
						profissional e mais conhecimento na area de tecnologia da informação,
						contribuindo para os ganhos e desenvolvimento do local de trabalho
						através de minhas qualificações, disposição e determinação.
					</p>
					<button>Download Curriculum</button>
				</div>
			</section>
			<section className="sections">
				<Header titlePage="" subTitlePage="Experiência Profissional" />
				<div className="timeline">
        <div className="itm-card frst">
						<div className="title-timeline">
							<h5>09/2021 – atual/2022</h5>
							<span>OPAH CONSULT, SP</span>
						</div>
						<h4 className="title_header">DESENVOLVEDOR REACT-NATIVE / REACT Jr.(Remoto)</h4>
						<p>
							Desenvolvimento em React Native (Android e IOS) em Projetos para a empresa.
              <br />
              Desenvolvimento em React em Projetos para a empresa
						</p>
					</div>
					<div className="itm-card frst">
						<div className="title-timeline">
							<h5>08/2021 – atual/2022</h5>
							<span>GRUPOW, SC</span>
						</div>
						<h4 className="title_header">DESENVOLVEDOR REACT-NATIVE Jr.(Remoto)</h4>
						<p>
							Desenvolvimento em React Native (Android e IOS) apps para a Empresa.
						</p>
					</div>
					<div className="itm-card">
						<div className="title-timeline">
							<h5>12/2018 – 05/2021</h5>
							<span>ULTRATEL TELECOM, SÃO VICENTE, SP - BRAZIL</span>
						</div>
						<h4 className="title_header">DESENVOLVEDOR WEB FRONT-END(Remoto)</h4>
						<p>
							Desenvolvimento em React e Node do Site da Empresa
							<br />
							Desenvolvimento em React Native (Android e IOS) apps para uso interno
							da Empresa
							<br />
							Colaboração nas atividades diárias de instalação de clientes.
							<br />
							Desenvolvimento de Banners para propagandas
							<br />
							Analise de Dados da Rede
						</p>
					</div>
					<div className="itm-card">
						<div className="title-timeline">
							<h5>04/2018 – 07/2019</h5>
							<span>BIZAPP, MORUMBI, SP - BRAZIL</span>
						</div>
						<h4 className="title_header">DESENVOLVEDOR WEB FRONT-END</h4>
						<p>
							Colaboração em desenvolvimento de portais no Dynamics CRM
							<br />
							Desenvolvimento e Manutenção de Páginas em ASP.NET
							<br />
							Desenvolvimento de páginas, formulários em Javascript ES6
						</p>
					</div>
				</div>
			</section>
			<section className="sections">
				<Header titlePage="" subTitlePage="Formação" />
				<div className="timeline">
					<div className="itm-card frst">
						<div className="title-timeline">
							<h5>01/2012 – 12/2017</h5>
							<span>UNIVERSIDADE SANTA CECÍLIA, SANTOS - SP BRAZIL</span>
						</div>
						<h4 className="title_header">Graduação em Engenharia da Computação</h4>
						<p>
							A Graduação em Engenharia de Computação estuda as técnicas, métodos e
							ferramentas matématicas, fisicas e computacionais para o
							desenvolvimento de circuitos, dispositivos e sistemas para
							desenvolvimento de soluções baseadas nas aréas elétrica e digital.
						</p>
					</div>

					<div className="itm-card">
						<div className="title-timeline">
							<h5>01/2003 – 12/2005</h5>
							<span>S.O.S COMPUTADORES, SÃO VICENTE - SP BRAZIL</span>
						</div>
						<h4 className="title_header">{'WEB DESIGN & FRONTEND'}</h4>
						<p>Curso Profissionalizante em: Web Design, Edição FRONTEND</p>
					</div>
				</div>
			</section>
		</AboutContainer>
	)
}
