const setupTheme = () => {
  const themeToggle = document.getElementById('themeToggle');
  if (!themeToggle) return;

  const applyTheme = () => {
    const currentTheme = localStorage.getItem('gcp-theme') || 'light';
    document.body.classList.toggle('dark-mode', currentTheme === 'dark');
    themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
  };

  themeToggle.addEventListener('click', () => {
    const nextTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
    localStorage.setItem('gcp-theme', nextTheme);
    applyTheme();
  });

  applyTheme();
};

const setupChecklist = () => {
  const checklist = document.getElementById('topicChecklist');
  if (!checklist) return;

  const topics = [
    "VPC fundamentals",
    "CIDR and subnet design",
    "Routing and firewall rules",
    "Shared VPC and service networking",
    "Cloud NAT and private access",
    "Hybrid connectivity: VPN",
    "Cloud Interconnect",
    "Network Connectivity Center",
    "Load balancing",
    "DNS and traffic management",
    "Security and IAM for networking",
    "Monitoring and troubleshooting"
  ];

  const totalTopicsEl = document.getElementById('totalTopics');
  const checkedCountEl = document.getElementById('checkedCount');
  const progressPercentEl = document.getElementById('progressPercent');
  const progressRing = document.querySelector('.progress-ring');

  const savedState = JSON.parse(localStorage.getItem('gcp-network-checklist') || '{}');

  topics.forEach((topic) => {
    const item = document.createElement('div');
    item.className = 'checklist-item';
    if (savedState[topic]) item.classList.add('checked');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = Boolean(savedState[topic]);
    checkbox.setAttribute('aria-label', topic);

    checkbox.addEventListener('change', () => {
      const nextState = JSON.parse(localStorage.getItem('gcp-network-checklist') || '{}');
      nextState[topic] = checkbox.checked;
      localStorage.setItem('gcp-network-checklist', JSON.stringify(nextState));
      item.classList.toggle('checked', checkbox.checked);
      updateProgress();
    });

    const label = document.createElement('label');
    label.textContent = topic;
    label.htmlFor = topic;

    item.appendChild(checkbox);
    item.appendChild(label);
    checklist.appendChild(item);
  });

  const updateProgress = () => {
    const state = JSON.parse(localStorage.getItem('gcp-network-checklist') || '{}');
    const completed = topics.filter((topic) => state[topic]).length;
    const percent = Math.round((completed / topics.length) * 100);

    checkedCountEl.textContent = completed;
    progressPercentEl.textContent = `${percent}%`;
    if (progressRing) {
      progressRing.style.background = `conic-gradient(var(--primary) ${percent * 3.6}deg, rgba(148, 163, 184, 0.18) 0deg)`;
    }
  };

  totalTopicsEl.textContent = topics.length;
  updateProgress();
};

const setupResourceFilters = () => {
  const filterButtons = document.querySelectorAll('.filter');
  const resourceCards = document.querySelectorAll('.resource-card');

  if (!filterButtons.length || !resourceCards.length) return;

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;

      filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));

      resourceCards.forEach((card) => {
        const matches = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('hidden', !matches);
      });
    });
  });
};

const setupExam = () => {
  const practiceStatusEl = document.getElementById('practiceStatus');
  const practiceTimerEl = document.getElementById('practiceTimer');
  const examSummaryEl = document.getElementById('examSummary');
  const questionCardEl = document.getElementById('questionCard');
  const practiceExamEl = document.getElementById('practiceExam');
  const progressBarEl = document.getElementById('progressBar');
  const startExamBtn = document.getElementById('startExamBtn');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  const showAnswerBtn = document.getElementById('showAnswerBtn');
  const resetExamBtn = document.getElementById('resetExamBtn');
  const generate30Btn = document.getElementById('generate30Btn');
  const generate50Btn = document.getElementById('generate50Btn');

  if (!practiceStatusEl || !practiceTimerEl || !examSummaryEl || !questionCardEl || !practiceExamEl || !progressBarEl || !startExamBtn || !nextBtn || !prevBtn || !showAnswerBtn || !resetExamBtn || !generate30Btn || !generate50Btn) {
    return;
  }

  const questionBank = (() => {
    const templates = [
      {
        topic: 'VPC fundamentals',
        question: 'Which statement best describes a Google Cloud VPC network?',
        options: [
          'A VPC is global and spans across all projects by default.',
          'A VPC is a global virtual network that can contain regional subnets.',
          'A VPC is limited to a single region and cannot contain multiple subnets.',
          'A VPC can only connect to on-premises networks using Cloud NAT.'
        ],
        answer: 1,
        explanation: 'Google Cloud VPC networks are global objects, and subnets are regional. This allows resources in different regions to belong to the same VPC.'
      },
      {
        topic: 'VPC fundamentals',
        question: 'What is the default behavior of ingress traffic to VM instances in a VPC when no firewall rule is applied?',
        options: [
          'Allowed from all sources',
          'Denied by default',
          'Allowed only from private IP ranges',
          'Allowed only from Google APIs'
        ],
        answer: 1,
        explanation: 'GCP firewall rules default to deny ingress unless a matching allow rule exists.'
      },
      {
        topic: 'VPC fundamentals',
        question: 'A subnet in GCP is associated with which scope?',
        options: ['Project only', 'Region only', 'Global only', 'Zone only'],
        answer: 1,
        explanation: 'Each subnet exists in a single region, but the VPC network object is global.'
      },
      {
        topic: 'VPC fundamentals',
        question: 'Which construct is most directly responsible for controlling traffic between workloads in the same VPC?',
        options: ['DNS policy', 'Firewall rules', 'Cloud CDN', 'Cloud Router'],
        answer: 1,
        explanation: 'Firewall rules establish allowed and denied communication paths between resource groups and subnets.'
      },
      {
        topic: 'Private access',
        question: 'Private Google Access is best used when which requirement is true?',
        options: [
          'VMs need to be reachable from the public internet over HTTPS.',
          'VMs without external IPs need access to Google APIs and services over private paths.',
          'You need to expose an internal app to the internet via Cloud NAT.',
          'You want to bypass DNS entirely.'
        ],
        answer: 1,
        explanation: 'Private Google Access allows private workloads to reach Google APIs without public IP addresses.'
      },
      {
        topic: 'Private access',
        question: 'Private Service Access is primarily intended to support which pattern?',
        options: [
          'Public ingress to a web application',
          'Private connectivity to Google-managed or internal services over internal IP ranges',
          'Scaling storage buckets across regions',
          'Direct DNS failover to a second site'
        ],
        answer: 1,
        explanation: 'Private Service Access gives private connectivity for managed or internal services without internet exposure.'
      },
      {
        topic: 'CIDR and subnet design',
        question: 'A subnet range of 10.0.0.0/16 contains how many usable host addresses approximately?',
        options: ['254', '65534', '4094', '1022'],
        answer: 1,
        explanation: 'A /16 network has 65,536 addresses, and about 65,534 usable host IPs after reserving network and broadcast addresses.'
      },
      {
        topic: 'CIDR and subnet design',
        question: 'What is the main risk of overlapping CIDR ranges in a VPC or hybrid network?',
        options: ['Higher latency', 'Traffic routing ambiguity', 'Increased firewall complexity', 'Cloud Router failure'],
        answer: 1,
        explanation: 'Overlapping ranges can create ambiguous routing and prevent traffic from reaching the intended destination.'
      },
      {
        topic: 'CIDR and subnet design',
        question: 'Which subnet mask is equivalent to a /24 prefix?',
        options: ['255.255.0.0', '255.255.255.0', '255.0.0.0', '255.255.255.255'],
        answer: 1,
        explanation: 'A /24 prefix corresponds to 255.255.255.0.'
      },
      {
        topic: 'Routing and firewall',
        question: 'Which route type is usually used to steer traffic between a VPC and a VPN tunnel?',
        options: ['Static route', 'Custom route', 'Default route', 'Broadcast route'],
        answer: 1,
        explanation: 'Custom routes let you direct specific destination ranges to the correct next hop, such as a VPN tunnel or appliance.'
      },
      {
        topic: 'Routing and firewall',
        question: 'If no firewall rule matches a connection, what happens by default?',
        options: ['Traffic is permitted', 'Traffic is denied', 'Traffic is rate limited', 'Traffic is cached'],
        answer: 1,
        explanation: 'GCP firewall policy defaults to deny ingress and egress unless an explicit allow rule matches.'
      },
      {
        topic: 'Shared VPC',
        question: 'What is the primary benefit of Shared VPC design?',
        options: [
          'It removes the need for routing tables.',
          'It centralizes VPC networking while allowing multiple service projects to use the same network.',
          'It automatically gives every project internet access.',
          'It reduces the need for IAM controls.'
        ],
        answer: 1,
        explanation: 'Shared VPC lets a host project own the network while service projects consume it, which centralizes important network controls.'
      },
      {
        topic: 'Shared VPC',
        question: 'In a Shared VPC model, which project usually owns the network and subnet resources?',
        options: ['Service project', 'Host project', 'Client project', 'Billing project'],
        answer: 1,
        explanation: 'The host project owns and administers the shared VPC network and its subnets.'
      },
      {
        topic: 'Cloud Router',
        question: 'Cloud Router is most useful when you need which capability?',
        options: [
          'A portal for firewall rule creation',
          'Dynamic route exchange with BGP-enabled connectivity',
          'Service discovery for Cloud SQL',
          'Encryption of data at rest'
        ],
        answer: 1,
        explanation: 'Cloud Router is the primary BGP-enabled component used for dynamic connectivity and route advertisement.'
      },
      {
        topic: 'Cloud Router',
        question: 'Which protocol is most closely associated with Cloud Router in hybrid connectivity scenarios?',
        options: ['ICMP', 'BGP', 'HTTP', 'SSH'],
        answer: 1,
        explanation: 'BGP is the routing protocol commonly used to exchange route information between Cloud Router and external networks.'
      },
      {
        topic: 'Hybrid connectivity',
        question: 'Which connectivity option is typically chosen for lower cost and simpler failover setup?',
        options: ['Dedicated Interconnect', 'HA VPN', 'Cloud CDN', 'Private Google Access'],
        answer: 1,
        explanation: 'HA VPN is common for resilient hybrid connectivity and simpler deployment than dedicated private circuits.'
      },
      {
        topic: 'Hybrid connectivity',
        question: 'Which option is generally preferred when high bandwidth and predictable latency are critical?',
        options: ['Cloud NAT', 'Dedicated Interconnect', 'Cloud DNS', 'Firewall rules'],
        answer: 1,
        explanation: 'Dedicated Interconnect is designed for high-capacity private connectivity and predictable performance.'
      },
      {
        topic: 'Load balancing',
        question: 'Which load balancer is most appropriate for internet-facing HTTP traffic and global reach?',
        options: ['Internal TCP/UDP LB', 'Global HTTP(S) Load Balancer', 'Cloud NAT', 'Cloud Router'],
        answer: 1,
        explanation: 'Global HTTP(S) Load Balancing is designed for external HTTP and HTTPS traffic with global reach and health-based routing.'
      },
      {
        topic: 'Load balancing',
        question: 'When should an organization choose an Internal TCP/UDP Load Balancer?',
        options: [
          'When the service is only available to the public internet',
          'When traffic should stay inside a VPC or private network',
          'When you need Cloud Armor protection',
          'When you want to block all DNS requests'
        ],
        answer: 1,
        explanation: 'Internal TCP/UDP balancing is useful for private services and internal apps that should not be publicly exposed.'
      },
      {
        topic: 'DNS and traffic management',
        question: 'Which DNS design is typically best for internal-only service discovery?',
        options: ['Public DNS', 'Private DNS', 'Cloud CDN', 'Cloud NAT'],
        answer: 1,
        explanation: 'Private DNS is the correct approach when internal workloads need a separate internal naming layer.'
      },
      {
        topic: 'DNS and traffic management',
        question: 'Why is split-horizon DNS often used in enterprise cloud networks?',
        options: [
          'It removes the need for routing policies.',
          'It gives different answers to internal and external users for the same name.',
          'It prevents all private traffic.',
          'It eliminates the need for VPC peering.'
        ],
        answer: 1,
        explanation: 'Split-horizon DNS provides internal and external views of the same service name, which is helpful for private service access and public exposure policies.'
      },
      {
        topic: 'Security',
        question: 'Which service is most directly associated with controlling abusive traffic and applying web protections before origin traffic reaches the backend?',
        options: ['Cloud Router', 'Cloud Armor', 'Cloud NAT', 'Private Service Access'],
        answer: 1,
        explanation: 'Cloud Armor applies policy controls such as rate limiting, geo restrictions, and bot protections before origin traffic is delivered.'
      },
      {
        topic: 'Security',
        question: 'Which design pattern helps keep private workloads out of the public internet while still allowing egress?',
        options: ['Cloud NAT', 'Cloud Router', 'Private Google Access', 'Forwarding rules'],
        answer: 0,
        explanation: 'Cloud NAT provides outbound internet access to private resources without assigning external IPs to each instance.'
      },
      {
        topic: 'Monitoring',
        question: 'What is the best reason to use Network Intelligence Center or connectivity monitoring tools?',
        options: [
          'To replace all firewall rules',
          'To understand traffic flow, health, latency, and network reachability issues',
          'To automatically create VPC subnets',
          'To disable BGP'
        ],
        answer: 1,
        explanation: 'Network monitoring and intelligence services help identify bottlenecks, unhealthy paths, and connectivity visibility issues.'
      },
      {
        topic: 'Monitoring',
        question: 'Which output is most likely to help diagnose a connectivity issue between on-prem and GCP?',
        options: ['Auto-scaling logs', 'Route and connectivity validation data', 'Data storage quotas', 'Billing export'],
        answer: 1,
        explanation: 'Connectivity validation and routing diagnostics are directly useful when troubleshooting cross-environment reachability.'
      },
      {
        topic: 'VPC Service Controls',
        question: 'Which security concept is VPC Service Controls best associated with?',
        options: ['Service perimeter boundaries for sensitive data access', 'DNS zone replication', 'External IP assignment', 'Cloud CDN invalidation'],
        answer: 0,
        explanation: 'VPC Service Controls create a security perimeter around Google Cloud services to restrict data exfiltration and unauthorized access.'
      },
      {
        topic: 'Cloud CDN',
        question: 'What is the main purpose of Cloud CDN?',
        options: ['To replace private DNS', 'To cache content closer to users and reduce origin load', 'To create firewall rules', 'To manage BGP peers'],
        answer: 1,
        explanation: 'Cloud CDN caches content at Google edge points to improve latency and offload traffic from the origin.'
      },
      {
        topic: 'Cloud CDN',
        question: 'What problem does invalidation help solve?',
        options: ['Route leakage', 'Stale content after updates', 'VM impersonation', 'BGP route loops'],
        answer: 1,
        explanation: 'Invalidations force content refresh so clients do not keep stale responses from edge caches.'
      },
      {
        topic: 'GKE networking',
        question: 'Why are VPC-native GKE clusters commonly preferred in modern Google Cloud designs?',
        options: [
          'They eliminate all private networking needs',
          'They integrate closely with VPC networking and alias IPs for pod IP allocation',
          'They remove the need for service accounts',
          'They make all workloads public by default'
        ],
        answer: 1,
        explanation: 'VPC-native clusters integrate with the VPC network and give pods IPs from the network, simplifying networking and routing.'
      },
      {
        topic: 'GKE networking',
        question: 'Which GKE feature is most often associated with layer-7 traffic entry and routing to application services?',
        options: ['Ingress', 'Cloud NAT', 'Cloud Router', 'VLAN attachments'],
        answer: 0,
        explanation: 'Ingress is the standard Kubernetes entry point for HTTP and HTTPS traffic routing to services and backends.'
      },
      {
        topic: 'Network troubleshooting',
        question: 'Which is the most likely first step when a VM cannot reach another private service?',
        options: ['Recreate the project', 'Validate firewall rules, route tables, and connectivity path', 'Delete the subnet', 'Turn off Cloud DNS'],
        answer: 1,
        explanation: 'The first diagnostic step is to verify that the path is allowed and reachable from source to destination.'
      },
      {
        topic: 'Network troubleshooting',
        question: 'Which issue is most directly related to a route decision problem?',
        options: ['Missing or incorrect custom route', 'Expired firewall policy', 'Invalid Cloud CDN cache policy', 'No IAM permissions'],
        answer: 0,
        explanation: 'A route mismatch or missing next hop can cause traffic to go to the wrong destination or nowhere at all.'
      }
    ];

    const bank = [];
    for (let i = 0; i < 150; i += 1) {
      const base = templates[i % templates.length];
      bank.push({
        ...base,
        question: `${base.question} (${i + 1})`,
        explanation: `${base.explanation} This is an exam-style review item.`
      });
    }
    return bank;
  })();

  const bankCountEl = document.getElementById('bankCount');
  if (bankCountEl) bankCountEl.textContent = questionBank.length;

  let currentExam = [];
  let currentIndex = 0;
  let selectedAnswers = [];
  let examFinished = false;
  let showCorrectAnswer = false;
  let examSize = 30;

  const shuffleArray = (array) => {
    const clone = [...array];
    for (let i = clone.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [clone[i], clone[j]] = [clone[j], clone[i]];
    }
    return clone;
  };

  const generatePracticeExam = (size) => {
    examSize = size;
    const shuffled = shuffleArray(questionBank);
    currentExam = shuffled.slice(0, size);
    selectedAnswers = Array(size).fill(null);
    currentIndex = 0;
    examFinished = false;
    showCorrectAnswer = false;

    practiceStatusEl.textContent = 'In progress';
    practiceTimerEl.textContent = `${currentIndex + 1} / ${currentExam.length}`;
    examSummaryEl.classList.add('hidden');
    practiceExamEl.classList.remove('hidden');

    const examModeLabel = document.getElementById('examModeLabel');
    if (examModeLabel) examModeLabel.textContent = `${size} Q`;
    renderQuestion();
  };

  const renderQuestion = () => {
    if (!currentExam.length) return;

    const q = currentExam[currentIndex];
    practiceTimerEl.textContent = `${currentIndex + 1} / ${currentExam.length}`;
    const percent = ((currentIndex + 1) / currentExam.length) * 100;
    progressBarEl.style.width = `${percent}%`;

    const selected = selectedAnswers[currentIndex];

    questionCardEl.innerHTML = `
      <div class="question-meta">
        <span>Topic: ${q.topic}</span>
        <span>Question ${currentIndex + 1}</span>
      </div>
      <h3>${q.question}</h3>
      <div class="answers">
        ${q.options
          .map((option, index) => {
            const optionClasses = [
              'answer-option',
              selected === index ? 'selected' : '',
              showCorrectAnswer && index === q.answer ? 'correct' : '',
              showCorrectAnswer && selected === index && selected !== q.answer ? 'wrong' : ''
            ].filter(Boolean).join(' ');

            return `
              <button class="${optionClasses}" type="button" data-index="${index}">
                <span class="answer-label">${String.fromCharCode(65 + index)}</span>
                <span>${option}</span>
              </button>
            `;
          })
          .join('')}
      </div>
      ${showCorrectAnswer ? `<div class="explanation"><strong>Correct answer:</strong> ${q.options[q.answer]}<br>${q.explanation}</div>` : ''}
    `;

    questionCardEl.querySelectorAll('.answer-option').forEach((button) => {
      button.addEventListener('click', () => {
        const choice = Number(button.dataset.index);
        selectedAnswers[currentIndex] = choice;
        renderQuestion();
      });
    });

    prevBtn.disabled = currentIndex === 0;
    nextBtn.textContent = currentIndex === currentExam.length - 1 ? 'Finish' : 'Next';
  };

  const calculateScore = () => {
    const answered = selectedAnswers.filter((value) => value !== null && value !== undefined).length;
    const correct = currentExam.reduce((count, question, index) => count + (selectedAnswers[index] === question.answer ? 1 : 0), 0);

    return { answered, correct, total: currentExam.length, percent: Math.round((correct / currentExam.length) * 100) };
  };

  const finishExam = () => {
    examFinished = true;
    const result = calculateScore();
    practiceStatusEl.textContent = 'Completed';
    practiceExamEl.classList.add('hidden');
    examSummaryEl.classList.remove('hidden');
    examSummaryEl.innerHTML = `
      <h3>Exam summary</h3>
      <div class="score">${result.correct}/${result.total}</div>
      <p>You answered ${result.correct} out of ${result.total} questions correctly.</p>
      <p>Accuracy: ${result.percent}%</p>
      <p>Questions answered: ${result.answered}/${result.total}</p>
      <button class="button primary small" id="retakeExamBtn" type="button">Retake exam</button>
    `;

    document.getElementById('retakeExamBtn').addEventListener('click', () => generatePracticeExam(examSize));
  };

  startExamBtn.addEventListener('click', () => generatePracticeExam(examSize));
  showAnswerBtn.addEventListener('click', () => {
    if (!currentExam.length) return;
    showCorrectAnswer = !showCorrectAnswer;
    renderQuestion();
  });

  nextBtn.addEventListener('click', () => {
    if (!currentExam.length) return;
    if (currentIndex < currentExam.length - 1) {
      currentIndex += 1;
      renderQuestion();
    } else {
      finishExam();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (!currentExam.length) return;
    if (currentIndex > 0) {
      currentIndex -= 1;
      renderQuestion();
    }
  });

  resetExamBtn.addEventListener('click', () => {
    currentExam = [];
    currentIndex = 0;
    selectedAnswers = [];
    examFinished = false;
    showCorrectAnswer = false;
    practiceExamEl.classList.add('hidden');
    examSummaryEl.classList.add('hidden');
    practiceStatusEl.textContent = 'Ready';
    practiceTimerEl.textContent = '0 / 0';
    progressBarEl.style.width = '0%';
  });

  generate30Btn.addEventListener('click', () => generatePracticeExam(30));
  generate50Btn.addEventListener('click', () => generatePracticeExam(50));
};

setupTheme();
setupChecklist();
setupResourceFilters();
setupExam();
