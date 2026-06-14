---
marp: true
theme: marp
paginate: true
size: 16:9
title: "제가 이걸 다 해요?: 1인 6역의 비밀"
footer: "제가 이걸 다 해요?: 1인 6역의 비밀"
---

<!-- _class: title -->

## LLM으로 영향력 넓히기

---

# 입사 1주차

<div class="columns two">
<div>
<h2>첫 과제</h2>
<blockquote>
iOS 앱에 기능 하나 구현해주세요.
</blockquote>
</div>
<div>
<h2>내 머릿속</h2>
<blockquote>
네 제가요?????<br>
Swift로 헬로 월드도 모르는데요?
</blockquote>
</div>
</div>

1. **알고 있던 것**
   1. React, TypeScript, 논문용 프로토타입
2. **갑자기 해야 했던 것**
   1. iOS 앱 구조 읽기
   2. Swift 문법 익히기
   3. 실제 제품 코드에 기능 넣기

---

<!-- _class: no-footer -->

# 입사 6개월차

<div class="cover-image">
<img src="themes/assets/languages.svg" alt="Languages chart" />
</div>

<p class="cover-caption">6개월차 신입이 FE BE Android iOS ML에 디자인까지 하게 된 이야기</p>

---

<!-- _class: clean-slide -->

# 왜 이렇게 많은 스택을 하게 됐나

<div class="feature-image">
<img src="assets/tinder-photo-selector.png" alt="Tinder AI Photo Selector" />
</div>

<p class="feature-caption">온디바이스부터 LLM까지 각 ML 컴포넌트들이 복잡하게 연결되어 있는 프로젝트</p>

---

<!-- _class: secret-slide -->

# 1인 6역의 비밀

<div class="secret-circles">
  <div class="secret-circle">
    <span>AI를 이용한<br>지식 전이 학습법</span>
  </div>
  <div class="secret-circle">
    <span>AI를 이용한<br>디테일 채우기</span>
  </div>
  <div class="secret-circle">
    <span>AI를 이용한<br>멀티 태스크 매니징</span>
  </div>
</div>

---


<!-- _class: single-secret-slide -->

<div class="single-secret-circle">
  <span>AI를 이용한<br>지식 전이 학습법</span>
</div>

---

<!-- _class: transfer-slide -->

# AI를 이용한 지식 전이 학습법

<div class="learning-shift">
  <div class="learning-source">
    <div class="source-card">책</div>
    <div class="source-card">YouTube 강의</div>
    <div class="source-card">공식 문서</div>
  </div>
  <div class="learning-arrow">→</div>
  <div class="personal-lecture">
    <span class="lecture-kicker">AI가 만드는</span>
    <span class="lecture-title">나에게 최적화된 강의 자료</span>
    <span class="lecture-subtitle">이미 아는 개념을 발판으로 새 기술을 설명한다</span>
  </div>
</div>

<blockquote class="transfer-quote">
처음부터 배우는 게 아니라, 이미 아는 지식에 새 개념을 붙인다.
</blockquote>

---

<!-- _class: transfer-slide -->

# React/TypeScript에서 다른 언어로

<div class="transfer-map">
  <div class="known-stack">
    <div class="stack-logo-row">
      <img src="assets/logos/react.svg" alt="React">
      <img src="assets/logos/typescript.svg" alt="TypeScript">
    </div>
    <h2>내가 이미 익숙한 세계</h2>
    <p>문법, 컴포넌트 구조, 비동기 흐름, 아키텍처 감각</p>
  </div>

  <div class="bridge-prompt">
    <span>GPT에게 항상 이렇게 묻기</span>
    <strong>“Swift의 이 개념을 TypeScript 개념과 대응시켜서<br>공통점과 차이점 위주로 설명해줘.”</strong>
  </div>

  <div class="swift-teacher">
    <div class="teacher-icons">
      <span>GPTs</span>
      <span>Gems</span>
    </div>
    <img src="assets/logos/swift.svg" alt="Swift">
    <strong>내 개인 Swift 선생님</strong>
    <small>내 배경지식을 아는 튜터</small>
  </div>
</div>

---

<!-- _class: transfer-slide -->

# 예시: 동시성이라는 하나의 개념

<div class="concurrency-flow">
  <div class="flow-step start-step">
    <img src="assets/logos/javascript.svg" alt="JavaScript">
    <strong>JavaScript</strong>
    <span>Event Loop</span>
    <small>내가 처음 알고 있던 모델</small>
  </div>

  <div class="flow-bridge">
    <span><b class="same-icon">🤝</b> 기다리는 동안 일하기</span>
    <span><img class="diff-icon" src="assets/icons/difference.svg" alt=""> Promise → Coroutine</span>
  </div>

  <div class="flow-step">
    <img src="assets/logos/python.svg" alt="Python">
    <strong>Python</strong>
    <span>asyncio</span>
  </div>

  <div class="flow-bridge">
    <span><b class="same-icon">🤝</b> 구조적 동시성</span>
    <span><img class="diff-icon" src="assets/icons/difference.svg" alt=""> Single Event Loop → Multi-core</span>
  </div>

  <div class="flow-step">
    <img src="assets/logos/swift.svg" alt="Swift">
    <strong>Swift</strong>
    <span>Swift<br>Concurrency</span>
  </div>
</div>

---

<!-- _class: single-secret-slide -->

<div class="single-secret-circle">
  <span>AI를 이용한<br>디테일 채우기</span>
</div>

---

<!-- _class: detail-fill-slide -->

# AI를 이용한 디테일 채우기

<div class="detail-pipeline">
  <div class="detail-column stack-column">
    <span class="column-kicker">여러 스택의 스펙</span>
    <div class="pill-grid">
      <span>iOS</span>
      <span>Android</span>
      <span>JavaScript</span>
      <span>TypeScript</span>
      <span>React Native</span>
      <span>PyTorch</span>
      <span>FastAPI</span>
      <span>LiteRT</span>
      <span>XNNPack</span>
    </div>
  </div>

  <div class="pipeline-arrow">→</div>

  <div class="detail-column structure-column">
    <span class="column-kicker">공통 구조로 추상화</span>
    <div class="structure-list">
      <span>동시성 모델</span>
      <span>데이터 흐름</span>
      <span>상태 관리</span>
      <span>리소스 경계</span>
      <span>통신 비용</span>
      <span>실행 그래프</span>
    </div>
  </div>

  <div class="pipeline-arrow">→</div>

  <div class="detail-column ai-column">
    <span class="column-kicker">AI가 채우는 디테일</span>
    <div class="ai-output-list">
      <span>Kotlin 코드</span>
      <span>Swift 코드</span>
      <span>TypeScript 코드</span>
      <span>학습 코드</span>
      <span>FastAPI 엔드포인트</span>
    </div>
  </div>
</div>

<blockquote class="detail-bottom">
내 역할은 모든 문법을 기억하는 것이 아니라, 올바른 구조를 설계하고 검증하는 것이다.
</blockquote>

---

<!-- _class: detail-fill-slide concurrency-review-slide -->

# 동시성은 문법보다 실행 모델이 중요하다

<div class="platform-concurrency">
  <div class="concurrency-stage syntax-stage">
    <span class="box-kicker">플랫폼별 문법</span>
    <div class="syntax-stack">
      <div class="syntax-row">
        <img src="assets/logos/swift.svg" alt="Swift">
        <strong>iOS</strong>
        <span>async/await · actor · MainActor</span>
      </div>
      <div class="syntax-row">
        <img src="assets/logos/kotlin.svg" alt="Kotlin">
        <strong>Android</strong>
        <span>coroutine · dispatcher · lifecycle scope</span>
      </div>
      <div class="syntax-row">
        <img src="assets/logos/javascript.svg" alt="JavaScript">
        <strong>JavaScript</strong>
        <span>event loop · promise · worker</span>
      </div>
    </div>
  </div>

  <div class="flow-arrow">→</div>

  <div class="concurrency-stage risk-stage">
    <span class="box-kicker">공통 위험 구조</span>
    <div class="risk-flow-list">
      <span>race condition</span>
      <span>main thread blocking</span>
      <span>shared state mutation</span>
      <span>lifecycle 밖에서 도는 task</span>
    </div>
  </div>

  <div class="flow-arrow">→</div>

  <div class="concurrency-stage review-stage">
    <span class="box-kicker">검토자의 시야</span>
    <p>실행 위치</p>
    <p>취소와 정리</p>
    <p>공유 상태 접근</p>
    <p>UI 업데이트 경계</p>
  </div>
</div>

<blockquote class="concurrency-bottom">
AI가 코드를 써도, 내가 검증하는 것은 문법이 아니라 실행 모델이다.
</blockquote>

---

<!-- _class: detail-fill-slide architecture-slide -->

# 같은 앱을 두 번 만들지 않는 아키텍처

<div class="architecture-map">
  <div class="shared-architecture">
    <span class="column-kicker">하나의 공통 설계도</span>
    <div class="architecture-items">
      <span>Domain Model</span>
      <span>State Machine</span>
      <span>Data Flow</span>
      <span>Repository Boundary</span>
      <span>Concurrency Policy</span>
      <span>Error Handling</span>
      <span>Observability</span>
    </div>
  </div>

  <div class="architecture-arrow">→</div>

  <div class="implementation-row">
    <div class="implementation-card ios-card">
      <img src="assets/logos/swift.svg" alt="Swift">
      <strong>iOS Implementation</strong>
      <span>SwiftUI / UIKit</span>
      <span>platform API</span>
      <span>lifecycle glue</span>
    </div>
    <div class="implementation-card android-card">
      <img src="assets/logos/kotlin.svg" alt="Kotlin">
      <strong>Android Implementation</strong>
      <span>Kotlin / Compose</span>
      <span>platform API</span>
      <span>lifecycle glue</span>
    </div>
  </div>

</div>

---

<!-- _class: detail-fill-slide unfamiliar-slide -->

# 처음 보는 기술 문장도, 문제의 층위를 찾으면 다룰 수 있다

<div class="technical-quote">
  <img class="openai-logo" src="assets/logos/openai-symbol.svg" alt="OpenAI">
  <span>PAN head activation에 GELU Activation head로 인해 XNNPack 연산이 44개의 partition으로 나뉘어서 XNNPack과 LiteRT 사이에 delegation이 너무 많이 일어납니다.</span>
</div>

<div class="abstraction-ladder">
  <div class="ladder-step">
    <span class="step-number">1</span>
    <strong>낯선 단어</strong>
    <p>PAN, GELU, ReLU6, XNNPack, LiteRT, delegate graph</p>
  </div>
  <div class="ladder-step">
    <span class="step-number">2</span>
    <strong>추상화</strong>
    <p>두 컴포넌트 사이의 통신비용 증가</p>
  </div>
  <div class="ladder-step highlight-step">
    <span class="step-number">3</span>
    <strong>AI를 활용한 해결</strong>
    <p>통신/전환 비용을 줄이는 연산 후보와 재학습, 벤치마크 코드를 제안받는다</p>
  </div>
</div>

<blockquote class="unfamiliar-bottom">
목표는 모든 디테일을 즉시 이해하는 것이 아니라, “어느 층의 문제인지” 파악하는 것이다.
</blockquote>

---

<!-- _class: single-secret-slide -->

<div class="single-secret-circle">
  <span>AI를 이용한<br>멀티 태스크 매니징</span>
</div>

---

<!-- _class: multitask-slide autonomy-slide -->

# 업무를 나누는 기준: AI가 얼마나 자율적으로 돌 수 있는가

<div class="autonomy-spectrum">
  <div class="spectrum-end human-end">
    <span class="spectrum-kicker">짧은 케이던스</span>
    <strong>사람이 자주 봐야 하는 일</strong>
    <p>눈으로 보고, 감각으로 판단하고, 빠르게 다시 지시한다.</p>
  </div>

  <div class="spectrum-line">
    <div class="work-item design-work">Design</div>
    <div class="work-item fe-work">FE</div>
    <div class="work-item mobile-work">Mobile</div>
    <div class="work-item backend-work">Backend</div>
    <div class="work-item ml-work">ML Modeling</div>
  </div>

  <div class="spectrum-end agent-end">
    <span class="spectrum-kicker">긴 케이던스</span>
    <strong>AI에게 오래 맡길 수 있는 일</strong>
    <p>실험, 테스트, 로그처럼 스스로 피드백을 받을 수 있다.</p>
  </div>
</div>

---

<!-- _class: multitask-slide rl-loop-slide -->

# AI가 혼자 전진하려면 피드백 루프가 있어야 한다

<div class="rl-loop">
  <div class="rl-node agent-node">
    <span>Agent</span>
    <strong>LLM</strong>
  </div>
  <div class="rl-arrow action-arrow">
    <span>Action</span>
    <small>코드 작성 · 실험 설계 · 수정</small>
  </div>
  <div class="rl-node environment-node">
    <span>Environment</span>
    <strong>실행 환경</strong>
  </div>
  <div class="rl-arrow reward-arrow">
    <span>Reward / Observation</span>
    <small>점수 · 테스트 · 로그 · 출력</small>
  </div>
</div>

<div class="loop-examples">
  <div>
    <strong>ML</strong>
    <p>실험을 돌리고 metric을 받아 다음 실험을 정한다.</p>
    <p>특정한 조건이 만족될 때까지 무한히 반복할 수 있다.</p>
  </div>
  <div>
    <strong>Backend</strong>
    <p>계약 문서, 테스트, 통합 결과로 수정 방향을 찾는다.</p>
    <p>간혹 안되는 경우가 있다.</p>
  </div>
  <div>
    <strong>Design/FE</strong>
    <p>보상 함수가 결국 사람의 눈이라 자동화 할 수 없다.</p>
  </div>
</div>

---

<!-- _class: multitask-slide queue-slide -->

# 여러 큐를 나누면 내 집중력을 더 효율적으로 쓸 수 있다

<div class="queue-board">
  <div class="queue-column">
    <div class="queue-lane slow-lane">
      <span class="queue-kicker">Long Running Queue</span>
      <strong>AI에게 맡겨두는 일</strong>
      <div class="queue-stack">
        <div class="queue-task">ML 실험</div>
        <div class="queue-task">모델 벤치마크</div>
        <div class="queue-task">리팩터링</div>
      </div>
    </div>
    <div class="queue-lane standard-lane">
      <span class="queue-kicker">Standard Queue</span>
      <strong>중간 점검으로 굴리는 일</strong>
      <div class="queue-stack">
        <div class="queue-task">Backend</div>
        <div class="queue-task">모바일 기능</div>
        <div class="queue-task">테스트 수정</div>
      </div>
    </div>
    <div class="focus-lane">
      <span class="queue-kicker">Human Focus Queue</span>
      <strong>내 눈으로 반복하는 일</strong>
      <div class="queue-stack">
        <div class="focus-task">디자인 확인</div>
        <div class="focus-task">FE polish</div>
        <div class="focus-task">UX 동작 검토</div>
      </div>
    </div>
  </div>
  <div class="queue-router-arrows">
    <span>←</span>
    <span>←</span>
    <span>←</span>
  </div>
  <div class="task-routing">
    <strong>New Task</strong>
    <div class="routing-result">이것은 어떤 큐인가?</div>
  </div>
</div>

---

<!-- _class: closing-line-slide -->

# LLM은 나의 능력을 증폭시키는 도구이다

---

<!-- _class: closing-line-slide -->

# LLM은 모든 일을 할 수 있게 해주는 도구이다
