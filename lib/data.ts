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
      description: {
        pt: 'Framework de automação E2E para Web e Mobile utilizando Cypress, Playwright, Selenium e Appium com integração contínua.',
        en: 'E2E automation framework for Web and Mobile using Cypress, Playwright, Selenium, and Appium with continuous integration.'
      },
      tech: ['Cypress', 'Playwright', 'Selenium', 'Appium', 'TypeScript'],
      metrics: { pt: '+200 casos de teste automatizados', en: '200+ automated test cases' }
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
