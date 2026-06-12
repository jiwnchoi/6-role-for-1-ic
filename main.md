---
marp: true
theme: marp
paginate: true
size: 16:9
title: "제가 이걸 다 해요?: 1인 6역의 비밀"
presenter: "최지원"
affiliation: "Software Engineer, MG AI, Match Group"
footer: "제가 이걸 다 해요?: 1인 6역의 비밀"
---

<!-- _class: title -->

## How I AI

---

# 나에 대해서

1. **뭐라고 소개할지 모르는 그냥 개발자**
   1. 명함에는 Machine Learning Software Engineer라고 적혀있음
   2. 입사하고 9개월 됨
2. **원래는 대학원생**
   1. 데이터 시각화 & HCI 전공
   2. 2021년부터 논문 쓰려고 React & TypeScript를 많이 함
   3. 그러다 보니 어느새 4년차 프론트엔드 비슷한 사람이 됨
3. **커리어 선택의 큰 줄기**
   1. 군대 안 갈라고 대학원 감
   2. 군대 안 갈라고 이 회사에 옴

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

<!-- _class: clean-slide -->

# 왜 이렇게 많은 스택을 하게 됐나

<div class="stack-pressure">
  <div class="pressure-item">
    <span class="pressure-label">On-device Inference</span>
    <span class="pressure-state">iOS&amp;Android 개발자에게 생소함</span>
  </div>
  <div class="pressure-item">
    <span class="pressure-label">LLM과 ML이 혼합된 비즈니스 로직</span>
    <span class="pressure-state">백엔드 개발자에게 생소함</span>
  </div>
  <div class="pressure-item">
    <span class="pressure-label">빠른 이터레이션을 통한 개념 증명</span>
    <span class="pressure-state">프론트엔드 개발자 하기 싫어함</span>
  </div>
  <div class="pressure-item">
    <span class="pressure-label">ML 모델링</span>
    <span class="pressure-state">팀에 인력이 없다</span>
  </div>
  <div class="pressure-conclusion">할 사람이 없다...</div>
</div>

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
    <span><img class="diff-icon" src="assets/icons/difference.svg" alt=""> 단일 루프 → 멀티코어</span>
  </div>

  <div class="flow-step">
    <img src="assets/logos/python.svg" alt="Python">
    <strong>Python</strong>
    <span>asyncio</span>
  </div>

  <div class="flow-bridge">
    <span><b class="same-icon">🤝</b> 구조적 동시성</span>
    <span><img class="diff-icon" src="assets/icons/difference.svg" alt=""> 단일 이벤트 루프 → 멀티코어 executor</span>
  </div>

  <div class="flow-step">
    <img src="assets/logos/swift.svg" alt="Swift">
    <strong>Swift</strong>
    <span>Swift<br>Concurrency</span>
  </div>
</div>
