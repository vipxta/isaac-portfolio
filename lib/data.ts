export const portfolioData = {
  personal: {
    name: 'Isaac Meneguini Albuquerque',
    location: 'Itapetininga, SP - Brasil',
    phone: '+55 (15) 99760-4490',
    email: 'isaacmeneguini@gmail.com',
    linkedin: 'https://www.linkedin.com/in/isaac-meneguini-albuquerque/',
    title: {
      pt: 'Analista de Testes | Quality Assurance (QA)',
      en: 'Test Analyst | Quality Assurance (QA)'
    }
  },
  summary: {
    pt: 'Analista de QA com +5 anos de experiência em testes manuais e automatizados, com forte atuação em projetos de alta complexidade nos setores financeiro, varejo e tecnologia. Foco em garantir a qualidade do software e a melhoria contínua de processos através de métricas e eficiência.',
    en: 'QA Analyst with 5+ years of experience in manual and automated testing, with strong participation in high-complexity projects in the financial, retail, and technology sectors. Focused on ensuring software quality and continuous process improvement through metrics and efficiency.'
  },
  highlights: [
    {
      icon: 'Shield',
      title: { pt: 'Segurança', en: 'Security' },
      description: { pt: 'Análise de vulnerabilidades com OWASP ZAP e Burp Suite', en: 'Vulnerability analysis with OWASP ZAP and Burp Suite' }
    },
    {
      icon: 'Zap',
      title: { pt: 'Performance', en: 'Performance' },
      description: { pt: 'Testes de carga com JMeter, k6 e Gatling', en: 'Load testing with JMeter, k6 and Gatling' }
    },
    {
      icon: 'Bot',
      title: { pt: 'Automação', en: 'Automation' },
      description: { pt: '+200 casos de teste automatizados', en: '200+ automated test cases' }
    },
    {
      icon: 'Cloud',
      title: { pt: 'Cloud & DevOps', en: 'Cloud & DevOps' },
      description: { pt: 'AWS, Azure, GCP, CI/CD pipelines', en: 'AWS, Azure, GCP, CI/CD pipelines' }
    }
  ],
  experience: [
    {
      company: 'Minsait',
      role: { pt: 'Analista de Testes (QA)', en: 'Test Analyst (QA)' },
      period: 'Jun/2024 - Atual',
      location: 'São Paulo/SP',
      description: {
        pt: [
          'Atuação estratégica em ambientes ágeis (Scrum/Kanban) sob práticas Lean e XP',
          'Desenvolvimento de frameworks de automação E2E com Cypress, Playwright e TestCafe',
          'Validação de APIs via Postman, Rest-Assured e Karate DSL',
          'Testes de carga e estresse com JMeter, k6 e LoadRunner',
          'Análise de vulnerabilidades com OWASP ZAP e Burp Suite',
          'Implementação de cultura QAOps com pipelines CI/CD'
        ],
        en: [
          'Strategic work in agile environments (Scrum/Kanban) under Lean and XP practices',
          'Development of E2E automation frameworks with Cypress, Playwright and TestCafe',
          'API validation via Postman, Rest-Assured and Karate DSL',
          'Load and stress testing with JMeter, k6 and LoadRunner',
          'Vulnerability analysis with OWASP ZAP and Burp Suite',
          'QAOps culture implementation with CI/CD pipelines'
        ]
      }
    },
    {
      company: 'SouJunior',
      role: { pt: 'Mentor de QA', en: 'QA Mentor' },
      period: 'Mai/2024 - Atual',
      location: 'São Paulo/SP',
      description: {
        pt: [
          'Liderança voluntária na capacitação de +10 profissionais em transição de carreira',
          'Code reviews detalhados e aplicação de Clean Code',
          'Instrução em testes manuais e automatizados (Cypress, Selenium)',
          'Orientação em BDD com Gherkin e documentação IEEE/ISO/ISTQB'
        ],
        en: [
          'Volunteer leadership in training 10+ professionals in career transition',
          'Detailed code reviews and Clean Code application',
          'Instruction in manual and automated testing (Cypress, Selenium)',
          'Guidance in BDD with Gherkin and IEEE/ISO/ISTQB documentation'
        ]
      }
    },
    {
      company: 'E2E Coders',
      role: { pt: 'Analista de Testes (QA)', en: 'Test Analyst (QA)' },
      period: 'Fev/2021 - Jan/2024',
      location: 'São Paulo/SP',
      description: {
        pt: [
          'Liderança no planejamento e refinamento técnico de testes via Jira, Xray, Zephyr',
          'Desenvolvimento de frameworks de automação E2E com Selenium, Katalon, Tosca',
          'Validação de serviços REST/SOAP com Postman e Rest-Assured',
          'Testes de carga e estresse com JMeter e Gatling',
          'Integração de suites de teste em pipelines CI/CD (Jenkins, CircleCI)'
        ],
        en: [
          'Leadership in technical planning and refinement of tests via Jira, Xray, Zephyr',
          'Development of E2E automation frameworks with Selenium, Katalon, Tosca',
          'REST/SOAP service validation with Postman and Rest-Assured',
          'Load and stress testing with JMeter and Gatling',
          'Integration of test suites in CI/CD pipelines (Jenkins, CircleCI)'
        ]
      }
    }
  ],
  projects: [
    {
      title: { pt: 'Framework de Testes de Segurança', en: 'Security Testing Framework' },
      category: 'security',
      hasSubProjects: true,
      description: {
        pt: 'Implementação de análise automatizada de vulnerabilidades utilizando OWASP ZAP e Burp Suite integrados ao pipeline CI/CD, garantindo aplicações resilientes e seguras.',
        en: 'Implementation of automated vulnerability analysis using OWASP ZAP and Burp Suite integrated into the CI/CD pipeline, ensuring resilient and secure applications.'
      },
      tech: ['OWASP ZAP', 'Burp Suite', 'SonarQube', 'GitHub Actions'],
      metrics: { pt: '20 projetos | 85% redução em vulnerabilidades', en: '20 projects | 85% reduction in vulnerabilities' },
      subProjects: [
        {
          id: 1,
          title: { pt: 'OWASP ZAP Scanner Automatizado', en: 'OWASP ZAP Automated Scanner' },
          description: {
            pt: 'Scanner automatizado de vulnerabilidades web que executa análises completas de segurança utilizando OWASP ZAP com relatórios detalhados e integração CI/CD.',
            en: 'Automated web vulnerability scanner that performs comprehensive security analysis using OWASP ZAP with detailed reports and CI/CD integration.'
          },
          tech: ['OWASP ZAP', 'Python', 'Docker', 'Jenkins'],
          github: 'https://github.com/vipxta/security-testing-framework/tree/main/01-owasp-zap-scanner'
        },
        {
          id: 2,
          title: { pt: 'Burp Suite API Integration', en: 'Burp Suite API Integration' },
          description: {
            pt: 'Integração da API do Burp Suite Professional para automação de testes de penetração e análise de tráfego HTTP/HTTPS em aplicações web.',
            en: 'Burp Suite Professional API integration for penetration testing automation and HTTP/HTTPS traffic analysis in web applications.'
          },
          tech: ['Burp Suite', 'REST API', 'Python', 'Java'],
          github: 'https://github.com/vipxta/security-testing-framework/tree/main/02-burp-suite-api'
        },
        {
          id: 3,
          title: { pt: 'Security Gate CI/CD Pipeline', en: 'CI/CD Security Gate Pipeline' },
          description: {
            pt: 'Pipeline de segurança automatizado que bloqueia deploys quando vulnerabilidades críticas são detectadas, garantindo código seguro em produção.',
            en: 'Automated security pipeline that blocks deployments when critical vulnerabilities are detected, ensuring secure code in production.'
          },
          tech: ['GitHub Actions', 'Jenkins', 'OWASP ZAP', 'SonarQube'],
          github: 'https://github.com/vipxta/security-testing-framework/tree/main/03-security-gate-cicd'
        },
        {
          id: 4,
          title: { pt: 'Dashboard de Vulnerabilidades', en: 'Vulnerability Dashboard' },
          description: {
            pt: 'Dashboard interativo para visualização e monitoramento de vulnerabilidades detectadas, com métricas de evolução e alertas em tempo real.',
            en: 'Interactive dashboard for visualization and monitoring of detected vulnerabilities, with evolution metrics and real-time alerts.'
          },
          tech: ['OWASP ZAP', 'Grafana', 'Python', 'PostgreSQL'],
          github: 'https://github.com/vipxta/security-testing-framework/tree/main/04-vulnerability-dashboard'
        },
        {
          id: 5,
          title: { pt: 'SQL Injection Detector', en: 'SQL Injection Detector' },
          description: {
            pt: 'Ferramenta especializada em detectar e reportar vulnerabilidades de SQL Injection em formulários e parâmetros de URL automaticamente.',
            en: 'Specialized tool for detecting and reporting SQL Injection vulnerabilities in forms and URL parameters automatically.'
          },
          tech: ['OWASP ZAP', 'Burp Suite', 'Selenium', 'Python'],
          github: 'https://github.com/vipxta/security-testing-framework/tree/main/05-sql-injection-detector'
        },
        {
          id: 6,
          title: { pt: 'XSS Scanner Automation', en: 'XSS Scanner Automation' },
          description: {
            pt: 'Scanner automatizado para detecção de vulnerabilidades Cross-Site Scripting (XSS) refletido, armazenado e baseado em DOM.',
            en: 'Automated scanner for detecting reflected, stored, and DOM-based Cross-Site Scripting (XSS) vulnerabilities.'
          },
          tech: ['OWASP ZAP', 'JavaScript', 'Node.js', 'Puppeteer'],
          github: 'https://github.com/vipxta/security-testing-framework/tree/main/06-xss-scanner'
        },
        {
          id: 7,
          title: { pt: 'Authentication Security Tests', en: 'Authentication Security Tests' },
          description: {
            pt: 'Suite de testes para validar segurança de autenticação: força bruta, bypass, session hijacking e OAuth vulnerabilities.',
            en: 'Test suite to validate authentication security: brute force, bypass, session hijacking, and OAuth vulnerabilities.'
          },
          tech: ['Burp Suite', 'OWASP ZAP', 'Python', 'OAuth 2.0'],
          github: 'https://github.com/vipxta/security-testing-framework/tree/main/07-authentication-tests'
        },
        {
          id: 8,
          title: { pt: 'CSRF Protection Validator', en: 'CSRF Protection Validator' },
          description: {
            pt: 'Ferramenta para validar implementação de proteção CSRF em aplicações web, testando tokens e headers de segurança.',
            en: 'Tool to validate CSRF protection implementation in web applications, testing tokens and security headers.'
          },
          tech: ['OWASP ZAP', 'Python', 'Selenium', 'REST API'],
          github: 'https://github.com/vipxta/security-testing-framework/tree/main/08-csrf-validator'
        },
        {
          id: 9,
          title: { pt: 'Security Reports Generator', en: 'Security Reports Generator' },
          description: {
            pt: 'Gerador automático de relatórios de segurança em PDF/HTML consolidando resultados de múltiplas ferramentas de scan.',
            en: 'Automatic security report generator in PDF/HTML consolidating results from multiple scanning tools.'
          },
          tech: ['OWASP ZAP', 'Burp Suite', 'Python', 'ReportLab'],
          github: 'https://github.com/vipxta/security-testing-framework/tree/main/09-security-reports'
        },
        {
          id: 10,
          title: { pt: 'Penetration Test Suite', en: 'Penetration Test Suite' },
          description: {
            pt: 'Suite completa de testes de penetração automatizados seguindo metodologia OWASP Testing Guide e PTES.',
            en: 'Complete automated penetration testing suite following OWASP Testing Guide and PTES methodology.'
          },
          tech: ['Burp Suite', 'OWASP ZAP', 'Kali Linux', 'Metasploit'],
          github: 'https://github.com/vipxta/security-testing-framework/tree/main/10-pentest-suite'
        },
        {
          id: 11,
          title: { pt: 'API Security Scanner', en: 'API Security Scanner' },
          description: {
            pt: 'Scanner especializado em APIs REST/GraphQL para detectar vulnerabilidades como BOLA, broken authentication e mass assignment.',
            en: 'Specialized scanner for REST/GraphQL APIs to detect vulnerabilities like BOLA, broken authentication, and mass assignment.'
          },
          tech: ['OWASP ZAP API', 'Postman', 'Python', 'Newman'],
          github: 'https://github.com/vipxta/security-testing-framework/tree/main/11-api-security-scanner'
        },
        {
          id: 12,
          title: { pt: 'JWT Token Analyzer', en: 'JWT Token Analyzer' },
          description: {
            pt: 'Ferramenta para análise e teste de segurança de tokens JWT: algoritmos fracos, expiração, claims e signature bypass.',
            en: 'Tool for JWT token security analysis and testing: weak algorithms, expiration, claims, and signature bypass.'
          },
          tech: ['Burp Suite', 'Python', 'JWT.io', 'Node.js'],
          github: 'https://github.com/vipxta/security-testing-framework/tree/main/12-jwt-analyzer'
        },
        {
          id: 13,
          title: { pt: 'SSL/TLS Certificate Checker', en: 'SSL/TLS Certificate Checker' },
          description: {
            pt: 'Validador automatizado de certificados SSL/TLS, verificando expiração, cipher suites e configurações de segurança.',
            en: 'Automated SSL/TLS certificate validator, checking expiration, cipher suites, and security configurations.'
          },
          tech: ['OpenSSL', 'Python', 'SSLyze', 'testssl.sh'],
          github: 'https://github.com/vipxta/security-testing-framework/tree/main/13-ssl-tls-checker'
        },
        {
          id: 14,
          title: { pt: 'Security Headers Validator', en: 'Security Headers Validator' },
          description: {
            pt: 'Ferramenta para validar headers HTTP de segurança: CSP, HSTS, X-Frame-Options, X-Content-Type-Options e mais.',
            en: 'Tool to validate HTTP security headers: CSP, HSTS, X-Frame-Options, X-Content-Type-Options, and more.'
          },
          tech: ['OWASP ZAP', 'Node.js', 'Python', 'curl'],
          github: 'https://github.com/vipxta/security-testing-framework/tree/main/14-security-headers'
        },
        {
          id: 15,
          title: { pt: 'Sensitive Data Exposure Detector', en: 'Sensitive Data Exposure Detector' },
          description: {
            pt: 'Scanner para detectar exposição de dados sensíveis: PII, credenciais em código, API keys e tokens vazados.',
            en: 'Scanner to detect sensitive data exposure: PII, credentials in code, API keys, and leaked tokens.'
          },
          tech: ['Burp Suite', 'TruffleHog', 'GitLeaks', 'Python'],
          github: 'https://github.com/vipxta/security-testing-framework/tree/main/15-sensitive-data-detector'
        },
        {
          id: 16,
          title: { pt: 'Rate Limiting Tester', en: 'Rate Limiting Tester' },
          description: {
            pt: 'Ferramenta para testar implementação de rate limiting em APIs, prevenindo ataques de força bruta e DoS.',
            en: 'Tool to test rate limiting implementation in APIs, preventing brute force and DoS attacks.'
          },
          tech: ['OWASP ZAP', 'k6', 'Python', 'Apache Benchmark'],
          github: 'https://github.com/vipxta/security-testing-framework/tree/main/16-rate-limiting-tester'
        },
        {
          id: 17,
          title: { pt: 'CORS Misconfiguration Scanner', en: 'CORS Misconfiguration Scanner' },
          description: {
            pt: 'Scanner para identificar configurações CORS inseguras que podem permitir acesso não autorizado a recursos.',
            en: 'Scanner to identify insecure CORS configurations that may allow unauthorized access to resources.'
          },
          tech: ['Burp Suite', 'Python', 'cURL', 'JavaScript'],
          github: 'https://github.com/vipxta/security-testing-framework/tree/main/17-cors-scanner'
        },
        {
          id: 18,
          title: { pt: 'File Upload Vulnerability Tester', en: 'File Upload Vulnerability Tester' },
          description: {
            pt: 'Suite de testes para vulnerabilidades em upload de arquivos: bypass de extensão, magic bytes e path traversal.',
            en: 'Test suite for file upload vulnerabilities: extension bypass, magic bytes, and path traversal.'
          },
          tech: ['OWASP ZAP', 'Burp Suite', 'Python', 'ExifTool'],
          github: 'https://github.com/vipxta/security-testing-framework/tree/main/18-file-upload-tester'
        },
        {
          id: 19,
          title: { pt: 'Session Management Analyzer', en: 'Session Management Analyzer' },
          description: {
            pt: 'Ferramenta para análise de gestão de sessões: fixação, previsibilidade de tokens e timeout configurations.',
            en: 'Tool for session management analysis: fixation, token predictability, and timeout configurations.'
          },
          tech: ['Burp Suite', 'OWASP ZAP', 'Python', 'Selenium'],
          github: 'https://github.com/vipxta/security-testing-framework/tree/main/19-session-analyzer'
        },
        {
          id: 20,
          title: { pt: 'OWASP Top 10 Compliance Reporter', en: 'OWASP Top 10 Compliance Reporter' },
          description: {
            pt: 'Gerador de relatórios de conformidade baseado no OWASP Top 10, mapeando vulnerabilidades encontradas às categorias oficiais.',
            en: 'Compliance report generator based on OWASP Top 10, mapping found vulnerabilities to official categories.'
          },
          tech: ['OWASP ZAP', 'Burp Suite', 'Python', 'Jinja2'],
          github: 'https://github.com/vipxta/security-testing-framework/tree/main/20-owasp-top10-reporter'
        }
      ]
    },
    {
      title: { pt: 'Suite de Testes de Performance', en: 'Performance Testing Suite' },
      category: 'performance',
      description: {
        pt: 'Desenvolvimento de testes de carga e estresse com JMeter, k6 e Gatling para validar a resiliência e escalabilidade de sistemas de alta demanda.',
        en: 'Development of load and stress tests with JMeter, k6, and Gatling to validate the resilience and scalability of high-demand systems.'
      },
      tech: ['JMeter', 'k6', 'Gatling', 'LoadRunner', 'Grafana'],
      metrics: { pt: 'Suporte a +10k requisições/segundo', en: 'Support for 10k+ requests/second' }
    },
    {
      title: { pt: 'Automação E2E Multi-plataforma', en: 'Multi-platform E2E Automation' },
      category: 'automation',
      hasSubProjects: true,
      description: {
        pt: 'Framework de automação E2E para Web e Mobile utilizando Cypress, Playwright, Selenium e Appium com integração contínua.',
        en: 'E2E automation framework for Web and Mobile using Cypress, Playwright, Selenium, and Appium with continuous integration.'
      },
      tech: ['Cypress', 'Playwright', 'Selenium', 'Appium', 'TypeScript'],
      metrics: { pt: '20 projetos | +200 casos de teste', en: '20 projects | 200+ test cases' },
      subProjects: [
        {
          id: 1,
          title: { pt: 'Cypress E2E Framework', en: 'Cypress E2E Framework' },
          description: {
            pt: 'Framework completo de automação E2E com TypeScript, Page Objects, custom commands e fixtures para testes web modernos.',
            en: 'Complete E2E automation framework with TypeScript, Page Objects, custom commands, and fixtures for modern web testing.'
          },
          tech: ['Cypress', 'TypeScript', 'Page Objects', 'Mochawesome'],
          github: 'https://github.com/vipxta/automation-testing-framework/tree/main/01-cypress-e2e-framework'
        },
        {
          id: 2,
          title: { pt: 'Playwright Multi-Browser', en: 'Playwright Multi-Browser' },
          description: {
            pt: 'Framework Playwright com suporte a Chromium, Firefox e WebKit para testes cross-browser automatizados.',
            en: 'Playwright framework with Chromium, Firefox, and WebKit support for automated cross-browser testing.'
          },
          tech: ['Playwright', 'TypeScript', 'Chromium', 'Firefox', 'WebKit'],
          github: 'https://github.com/vipxta/automation-testing-framework/tree/main/02-playwright-multi-browser'
        },
        {
          id: 3,
          title: { pt: 'Selenium TestNG Framework', en: 'Selenium TestNG Framework' },
          description: {
            pt: 'Framework Java com Selenium WebDriver e TestNG para automação web corporativa com reporting avançado.',
            en: 'Java framework with Selenium WebDriver and TestNG for enterprise web automation with advanced reporting.'
          },
          tech: ['Selenium', 'Java', 'TestNG', 'Maven', 'ExtentReports'],
          github: 'https://github.com/vipxta/automation-testing-framework/tree/main/03-selenium-testng-framework'
        },
        {
          id: 4,
          title: { pt: 'Selenium NUnit C#', en: 'Selenium NUnit C#' },
          description: {
            pt: 'Framework C# com Selenium e NUnit para automação de aplicações .NET com Page Object Model.',
            en: 'C# framework with Selenium and NUnit for .NET application automation with Page Object Model.'
          },
          tech: ['Selenium', 'C#', 'NUnit', '.NET', 'SpecFlow'],
          github: 'https://github.com/vipxta/automation-testing-framework/tree/main/04-selenium-nunit-csharp'
        },
        {
          id: 5,
          title: { pt: 'Appium Mobile Testing', en: 'Appium Mobile Testing' },
          description: {
            pt: 'Framework Python com Appium para automação de testes em aplicativos Android e iOS nativos e híbridos.',
            en: 'Python framework with Appium for automated testing of native and hybrid Android/iOS applications.'
          },
          tech: ['Appium', 'Python', 'Android', 'iOS', 'Pytest'],
          github: 'https://github.com/vipxta/automation-testing-framework/tree/main/05-appium-mobile-testing'
        },
        {
          id: 6,
          title: { pt: 'Espresso Android Native', en: 'Espresso Android Native' },
          description: {
            pt: 'Testes nativos Android com Espresso e Kotlin para validação de UI com alta performance e confiabilidade.',
            en: 'Native Android tests with Espresso and Kotlin for UI validation with high performance and reliability.'
          },
          tech: ['Espresso', 'Kotlin', 'Android', 'JUnit', 'Gradle'],
          github: 'https://github.com/vipxta/automation-testing-framework/tree/main/06-espresso-android-native'
        },
        {
          id: 7,
          title: { pt: 'XCUITest iOS Native', en: 'XCUITest iOS Native' },
          description: {
            pt: 'Testes nativos iOS com XCUITest e Swift para automação de interfaces Apple com XCTest framework.',
            en: 'Native iOS tests with XCUITest and Swift for Apple interface automation with XCTest framework.'
          },
          tech: ['XCUITest', 'Swift', 'iOS', 'XCTest', 'Xcode'],
          github: 'https://github.com/vipxta/automation-testing-framework/tree/main/07-xcuitest-ios-native'
        },
        {
          id: 8,
          title: { pt: 'Robot Framework Suite', en: 'Robot Framework Suite' },
          description: {
            pt: 'Suite completa com Robot Framework usando keyword-driven testing para automação web e API.',
            en: 'Complete suite with Robot Framework using keyword-driven testing for web and API automation.'
          },
          tech: ['Robot Framework', 'SeleniumLibrary', 'RequestsLibrary', 'Python'],
          github: 'https://github.com/vipxta/automation-testing-framework/tree/main/08-robot-framework-suite'
        },
        {
          id: 9,
          title: { pt: 'Cucumber BDD Framework', en: 'Cucumber BDD Framework' },
          description: {
            pt: 'Framework BDD com Cucumber e Gherkin para especificações executáveis e colaboração entre times.',
            en: 'BDD framework with Cucumber and Gherkin for executable specifications and team collaboration.'
          },
          tech: ['Cucumber', 'Java', 'Gherkin', 'Selenium', 'JUnit'],
          github: 'https://github.com/vipxta/automation-testing-framework/tree/main/09-cucumber-bdd-framework'
        },
        {
          id: 10,
          title: { pt: 'TestCafe Automation', en: 'TestCafe Automation' },
          description: {
            pt: 'Framework TestCafe com TypeScript para testes E2E sem necessidade de WebDriver ou plugins.',
            en: 'TestCafe framework with TypeScript for E2E tests without WebDriver or plugins required.'
          },
          tech: ['TestCafe', 'TypeScript', 'Node.js', 'Page Objects'],
          github: 'https://github.com/vipxta/automation-testing-framework/tree/main/10-testcafe-automation'
        },
        {
          id: 11,
          title: { pt: 'Katalon Studio Scripts', en: 'Katalon Studio Scripts' },
          description: {
            pt: 'Scripts Groovy para Katalon Studio com keywords customizadas e integração de dados externos.',
            en: 'Groovy scripts for Katalon Studio with custom keywords and external data integration.'
          },
          tech: ['Katalon', 'Groovy', 'Selenium', 'TestOps'],
          github: 'https://github.com/vipxta/automation-testing-framework/tree/main/11-katalon-studio-scripts'
        },
        {
          id: 12,
          title: { pt: 'Tricentis Tosca Integration', en: 'Tricentis Tosca Integration' },
          description: {
            pt: 'Guia de integração e melhores práticas para automação model-based com Tricentis Tosca.',
            en: 'Integration guide and best practices for model-based automation with Tricentis Tosca.'
          },
          tech: ['Tosca', 'Model-Based Testing', 'SAP', 'Salesforce'],
          github: 'https://github.com/vipxta/automation-testing-framework/tree/main/12-tricentis-tosca-integration'
        },
        {
          id: 13,
          title: { pt: 'Postman Newman API', en: 'Postman Newman API' },
          description: {
            pt: 'Collections Postman com Newman para automação de testes de API REST com CI/CD integration.',
            en: 'Postman collections with Newman for REST API test automation with CI/CD integration.'
          },
          tech: ['Postman', 'Newman', 'JavaScript', 'REST API', 'JSON Schema'],
          github: 'https://github.com/vipxta/automation-testing-framework/tree/main/13-postman-newman-api'
        },
        {
          id: 14,
          title: { pt: 'Rest-Assured Framework', en: 'Rest-Assured Framework' },
          description: {
            pt: 'Framework Java com Rest-Assured para testes de API com validação de schema e autenticação OAuth.',
            en: 'Java framework with Rest-Assured for API testing with schema validation and OAuth authentication.'
          },
          tech: ['Rest-Assured', 'Java', 'TestNG', 'JSON Schema', 'OAuth'],
          github: 'https://github.com/vipxta/automation-testing-framework/tree/main/14-rest-assured-framework'
        },
        {
          id: 15,
          title: { pt: 'Karate DSL Suite', en: 'Karate DSL Suite' },
          description: {
            pt: 'Suite Karate DSL para testes de API com sintaxe Gherkin simplificada e mocking integrado.',
            en: 'Karate DSL suite for API testing with simplified Gherkin syntax and integrated mocking.'
          },
          tech: ['Karate', 'Gherkin', 'Java', 'REST', 'GraphQL'],
          github: 'https://github.com/vipxta/automation-testing-framework/tree/main/15-karate-dsl-suite'
        },
        {
          id: 16,
          title: { pt: 'SoapUI API Testing', en: 'SoapUI API Testing' },
          description: {
            pt: 'Scripts Groovy para SoapUI com testes SOAP/REST e data-driven testing automatizado.',
            en: 'Groovy scripts for SoapUI with SOAP/REST tests and automated data-driven testing.'
          },
          tech: ['SoapUI', 'Groovy', 'SOAP', 'REST', 'WSDL'],
          github: 'https://github.com/vipxta/automation-testing-framework/tree/main/16-soapui-api-testing'
        },
        {
          id: 17,
          title: { pt: 'BrowserStack Cloud', en: 'BrowserStack Cloud' },
          description: {
            pt: 'Integração Python/Selenium com BrowserStack para testes em dispositivos reais e browsers na nuvem.',
            en: 'Python/Selenium integration with BrowserStack for testing on real devices and cloud browsers.'
          },
          tech: ['BrowserStack', 'Python', 'Selenium', 'Pytest', 'Cloud Testing'],
          github: 'https://github.com/vipxta/automation-testing-framework/tree/main/17-browserstack-cloud'
        },
        {
          id: 18,
          title: { pt: 'Sauce Labs Cross-Platform', en: 'Sauce Labs Cross-Platform' },
          description: {
            pt: 'Framework para execução de testes em Sauce Labs com suporte a múltiplos browsers e plataformas.',
            en: 'Framework for test execution on Sauce Labs with support for multiple browsers and platforms.'
          },
          tech: ['Sauce Labs', 'Selenium', 'Appium', 'Cross-Browser', 'Cloud'],
          github: 'https://github.com/vipxta/automation-testing-framework/tree/main/18-sauce-labs-crossplatform'
        },
        {
          id: 19,
          title: { pt: 'Pytest Selenium Framework', en: 'Pytest Selenium Framework' },
          description: {
            pt: 'Framework Python com Pytest e Selenium para testes web com fixtures avançadas e paralelização.',
            en: 'Python framework with Pytest and Selenium for web tests with advanced fixtures and parallelization.'
          },
          tech: ['Pytest', 'Selenium', 'Python', 'Allure', 'pytest-xdist'],
          github: 'https://github.com/vipxta/automation-testing-framework/tree/main/19-pytest-selenium-framework'
        },
        {
          id: 20,
          title: { pt: 'CI/CD Test Pipeline', en: 'CI/CD Test Pipeline' },
          description: {
            pt: 'Configurações completas de CI/CD com GitHub Actions, Jenkins e Docker para execução automatizada de testes.',
            en: 'Complete CI/CD configurations with GitHub Actions, Jenkins, and Docker for automated test execution.'
          },
          tech: ['GitHub Actions', 'Jenkins', 'Docker', 'Kubernetes', 'CI/CD'],
          github: 'https://github.com/vipxta/automation-testing-framework/tree/main/20-cicd-test-pipeline'
        }
      ]
    },
    {
      title: { pt: 'Pipeline QAOps', en: 'QAOps Pipeline' },
      category: 'devops',
      description: {
        pt: 'Implementação de cultura QAOps com gestão de pipelines CI/CD, containerização Docker/Kubernetes e execução em cloud (BrowserStack, AWS).',
        en: 'QAOps culture implementation with CI/CD pipeline management, Docker/Kubernetes containerization, and cloud execution (BrowserStack, AWS).'
      },
      tech: ['GitHub Actions', 'GitLab CI', 'Docker', 'Kubernetes', 'AWS'],
      metrics: { pt: 'Deploy contínuo com 99.9% de uptime', en: 'Continuous deployment with 99.9% uptime' }
    }
  ],
  skills: {
    automation: ['Cypress', 'Playwright', 'Selenium', 'Appium', 'Robot Framework', 'Katalon'],
    languages: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C#', 'Ruby'],
    api: ['Postman', 'Rest-Assured', 'Karate DSL', 'SoapUI', 'Insomnia'],
    performance: ['JMeter', 'k6', 'Gatling', 'LoadRunner'],
    security: ['OWASP ZAP', 'Burp Suite', 'SonarQube'],
    cloud: ['AWS', 'Azure', 'GCP', 'BrowserStack', 'Sauce Labs'],
    devops: ['Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'GitLab CI'],
    management: ['Jira', 'Xray', 'Zephyr', 'TestRail', 'Azure Test Plans']
  },
  education: [
    {
      degree: { pt: 'Engenharia de Computação', en: 'Computer Engineering' },
      institution: 'UNIVESP',
      status: { pt: 'Concluído - Nov/2023', en: 'Completed - Nov/2023' }
    },
    {
      degree: { pt: 'Engenharia de Qualidade de Software', en: 'Software Quality Engineering' },
      institution: 'EBAC',
      status: { pt: 'Em andamento', en: 'In progress' }
    },
    {
      degree: { pt: 'Licenciatura Pedagógica', en: 'Teaching Degree' },
      institution: 'IFSP',
      status: { pt: 'Em andamento - Previsão: Dez/2026', en: 'In progress - Expected: Dec/2026' }
    }
  ],
  certifications: [
    'AICS® ASTFC - Accredited Software Testing Fundamentals Certification',
    'Agile Tester Engineer - E2E Treinamentos'
  ]
};
