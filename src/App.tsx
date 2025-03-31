import React from 'react';
import { Code2, Mail, MessageSquare, Smartphone, Database, Cloud, Shield, Cpu, LineChart, Users, MessageCircle, Bot, Brain, Sparkles, Zap, Clock, Code, GitBranch } from 'lucide-react';

function App() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5512996807562', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="logo-container flex justify-center items-center mb-6">
              <div className="logo-icon">
                <Bot className="w-full h-full text-white" />
              </div>
              <h1 className="font-museo text-5xl md:text-7xl font-bold text-gradient">
                ema-software
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Transformando ideias em soluções digitais inovadoras
            </p>
          </div>
        </div>
      </div>

      {/* AI Development Section */}
      <div className="bg-gray-900/30 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-museo text-3xl md:text-4xl font-bold mb-6">
              Desenvolvimento Potencializado por IA
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Combinamos expertise humana com inteligência artificial para entregar soluções mais rápidas, inteligentes e inovadoras
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-xl border border-primary/20 hover:border-primary/40 transition-colors">
              <Brain className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Desenvolvimento Inteligente</h3>
              <p className="text-gray-400">
                Utilizamos modelos de IA para otimizar o código, detectar bugs precocemente e sugerir melhorias de performance automaticamente.
              </p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-xl border border-primary/20 hover:border-primary/40 transition-colors">
              <Sparkles className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Automação Avançada</h3>
              <p className="text-gray-400">
                Automatizamos tarefas repetitivas e processos complexos, permitindo que nossa equipe foque em inovação e criatividade.
              </p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-xl border border-primary/20 hover:border-primary/40 transition-colors">
              <Zap className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Desenvolvimento Acelerado</h3>
              <p className="text-gray-400">
                Reduzimos significativamente o tempo de desenvolvimento mantendo a qualidade através de ferramentas de IA e automação.
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Benefícios da IA no Desenvolvimento</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Redução de até 60% no tempo de desenvolvimento</span>
                </li>
                <li className="flex items-start gap-3">
                  <Code className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Código mais limpo e manutenível</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Detecção precoce de vulnerabilidades de segurança</span>
                </li>
                <li className="flex items-start gap-3">
                  <GitBranch className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Integração contínua e deploy automatizado</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Nossa Abordagem com IA</h3>
              <p className="text-gray-400 mb-6">
                Combinamos as mais recentes tecnologias de IA com nossa experiência em desenvolvimento para criar soluções que são:
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-primary">
                  <span className="text-2xl">•</span>
                  <span>Mais rápidas de desenvolver</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <span className="text-2xl">•</span>
                  <span>Mais inteligentes e adaptativas</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <span className="text-2xl">•</span>
                  <span>Mais fáceis de manter</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <span className="text-2xl">•</span>
                  <span>Mais econômicas a longo prazo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="font-museo text-3xl md:text-4xl font-bold text-center mb-16">
          Desenvolvimento de Sistemas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-8 rounded-xl">
            <Code2 className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-4">Desenvolvimento Web</h3>
            <p className="text-gray-400">
              Criamos soluções web modernas e responsivas para sua empresa, utilizando as mais recentes tecnologias do mercado.
            </p>
          </div>
          <div className="bg-gray-900 p-8 rounded-xl">
            <Smartphone className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-4">Aplicativos Mobile</h3>
            <p className="text-gray-400">
              Desenvolvemos aplicativos nativos e híbridos para iOS e Android, oferecendo experiências únicas aos usuários.
            </p>
          </div>
          <div className="bg-gray-900 p-8 rounded-xl">
            <MessageSquare className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-4">Consultoria</h3>
            <p className="text-gray-400">
              Oferecemos consultoria especializada em tecnologia e inovação para impulsionar seu negócio.
            </p>
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="bg-gray-900/50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-museo text-3xl md:text-4xl font-bold text-center mb-16">
            Nossas Especialidades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <Database className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold mb-2">Banco de Dados</h3>
                <p className="text-gray-400">Modelagem e otimização de bancos de dados relacionais e NoSQL para alto desempenho.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Cloud className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold mb-2">Cloud Computing</h3>
                <p className="text-gray-400">Soluções em nuvem escaláveis e seguras para sua aplicação.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Shield className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold mb-2">Segurança</h3>
                <p className="text-gray-400">Implementação de práticas avançadas de segurança e proteção de dados.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Cpu className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold mb-2">Sistemas Integrados</h3>
                <p className="text-gray-400">Desenvolvimento de sistemas empresariais integrados e personalizados.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <LineChart className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold mb-2">Business Intelligence</h3>
                <p className="text-gray-400">Análise de dados e relatórios inteligentes para tomada de decisões.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Users className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold mb-2">Suporte Técnico</h3>
                <p className="text-gray-400">Acompanhamento contínuo e suporte especializado para seu sistema.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="font-museo text-3xl md:text-4xl font-bold text-center mb-16">
          Nosso Processo de Desenvolvimento
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-gray-900 p-6 rounded-xl text-center">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">1</span>
            </div>
            <h3 className="text-lg font-bold mb-2">Análise</h3>
            <p className="text-gray-400">Entendimento profundo das necessidades do seu negócio</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl text-center">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">2</span>
            </div>
            <h3 className="text-lg font-bold mb-2">Planejamento</h3>
            <p className="text-gray-400">Definição de arquitetura e tecnologias adequadas</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl text-center">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">3</span>
            </div>
            <h3 className="text-lg font-bold mb-2">Desenvolvimento</h3>
            <p className="text-gray-400">Implementação ágil com entregas contínuas</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl text-center">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">4</span>
            </div>
            <h3 className="text-lg font-bold mb-2">Entrega</h3>
            <p className="text-gray-400">Implementação e suporte contínuo</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="font-museo text-3xl md:text-4xl font-bold text-center mb-16">
            Entre em Contato
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a
              href="mailto:emanuel.sistemas@gmail.com"
              className="flex items-center gap-3 text-lg hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
              emanuel.sistemas@gmail.com
            </a>
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center gap-3 bg-primary hover:bg-primary-dark px-6 py-3 rounded-full transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
              (12) 9 9680-7562
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;