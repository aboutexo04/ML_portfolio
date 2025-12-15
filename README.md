# 📊 APT Price Prediction: ML Experiment Dashboard

> **아파트 실거래가 예측 대회의 실험 모델 성능 추이를 추적하고 비교 분석하기 위한 React 기반 대시보드**

<img width="1283" height="336" alt="image" src="https://github.com/user-attachments/assets/d5ce48af-75a4-44a8-8d47-a563c614b91d" />

## 1. 프로젝트 개요 (Overview)
본 프로젝트는 '아파트 실거래가 예측 AI 경진대회' 진행 중 발생한 수많은 실험 데이터(Submission Logs)를 체계적으로 관리하기 위해 개발되었습니다.
단순한 로그 파일 확인을 넘어, **모델 간 성능 비교, 개선율 추적, 리더보드 점수 시각화**를 통해 데이터 기반의 의사결정을 돕는 **실험 관리 도구(Experiment Tracking Tool)**입니다.

AI 엔지니어로서 모델링뿐만 아니라 **데이터 로깅, 실험 결과 시각화, 성능 모니터링 시스템 구축 역량**을 보여주기 위해 기획되었습니다.

## 2. 핵심 기능 (Key Features)
* **📈 성능 추적 (Performance Tracking):** 18회의 주요 제출 기록을 시계열 차트로 시각화하여 모델의 성능 수렴 과정을 분석 (`Recharts` 활용).
* **🏆 지표 비교 (Metric Analysis):** 베이스라인 대비 RMSE 개선율(%)과 퍼블릭/프라이빗 리더보드 점수 격차를 카드 UI로 직관적 확인.
* **🔍 상세 로그 (Experiment Logs):** 각 제출 모델(XGBoost, LGBM, Ensemble 등)의 상세 설정과 최종 선택 여부를 테이블 형태로 관리.
* **⚡️ 인터랙티브 뷰 (Interactive UI):** `Dashboard` (요약)와 `History` (상세) 탭을 통한 다각도 데이터 탐색.

## 3. 기술적 특징 & 구현 (Technical Details)
ML 실험 데이터를 효과적으로 표현하기 위해 다음과 같은 프론트엔드 기술을 적용했습니다.

* **Data Driven:** `constants.ts`에 정의된 정규화된 실험 스키마(`SUBMISSION_HISTORY`)를 기반으로 뷰를 렌더링합니다.
* **Component Architecture:** 재사용 가능한 `MetricCard`, `SubmissionChart` 컴포넌트를 설계하여 유지보수성을 높였습니다.
* **Modern Stack:**
    * **Framework:** React 19 + Vite (빠른 렌더링 및 빌드 최적화)
    * **Language:** TypeScript (엄격한 타입 시스템을 통한 데이터 안정성 확보)
    * **Styling:** Tailwind CSS (직관적인 UI 스타일링)
    * **Visualization:** Recharts (데이터 시각화 라이브러리)

## 4. 데이터 및 지표 산출 로직 (Logic)
* **개선율 계산:** 초기(Baseline) 모델의 RMSE와 현재 모델의 RMSE를 비교하여 `Improvement Rate`를 동적으로 산출합니다.
* **Score Formatting:** 퍼블릭/프라이빗 점수는 소수점 4자리(`toFixed(4)`)까지 정밀하게 표기하여 미세한 성능 차이를 식별합니다.
* **Filtering:** 실패한 실험(Fail)이나 유효하지 않은 제출 건은 시각화 파이프라인에서 자동으로 필터링됩니다.

## 5. 실행 방법 (How to Run)
로컬 환경에서 대시보드를 실행하여 실험 기록을 확인할 수 있습니다.

```bash
# 1. 레포지토리 클론
git clone [Repo URL]

# 2. 의존성 설치
npm install

# 3. 개발 서버 실행
npm run dev
# 브라우저에서 http://localhost:5173 접속
```
## 📂 프로젝트 구조 (Project Structure)

```text
ML_portfolio/
├── App.tsx                # 메인 페이지 컴포지션 및 상태 관리
├── components/
│   ├── MetricCard.tsx     # 핵심 성과 카드
│   ├── SubmissionChart.tsx# 성과 추이 차트
│   └── SubmissionTable.tsx# 제출 이력 테이블
├── constants.ts           # 사용자/대회 정보 및 제출 이력 데이터
├── types.ts               # TypeScript 인터페이스 정의
├── index.html             # Tailwind 및 import map 설정
├── index.tsx              # React DOM 마운트 엔트리
├── package.json           # 빌드 및 런타임 의존성
└── vite.config.ts         # Vite 빌드 설정
```

## 향후 확장 아이디어
- **MLOps 파이프라인 연동**: MLflow나 WandB API와 연동하여 실시간 실험 로그 자동 시각화.
- **모델 비교 기능 강화**: 두 모델 간의 Feature Importance 비교 차트 추가.
- **리포트 자동화**: 실험 종료 후 최종 성과 리포트(PDF) 자동 생성 기능 구현.

Created by Moon Seoyeon | AI Engineer
