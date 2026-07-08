# pickfit-fe

[![CI](https://github.com/pickfit-ai/pickfit-fe/actions/workflows/ci.yml/badge.svg)](https://github.com/pickfit-ai/pickfit-fe/actions/workflows/ci.yml)

추천 품질과 모델 상태를 확인하는 Expo 운영 대시보드입니다.

## 제품 맥락

추천 운영자는 모델 점수보다 이상 신호를 먼저 봐야 합니다. 이 앱은 추천 정확도, 재학습 작업, 모델 드리프트 알림을 우선 노출합니다.

## 핵심 화면

- `dashboard`: 추천 정확도, 재학습 작업, 모델 드리프트 알림 표시
- API 호출은 `ky` 기반 `src/features/dashboard/api.ts`로 분리
- 공통 지표 카드는 `src/shared/components/metric-card.tsx`에서 재사용

## 기술 스택

- Expo Router
- React Native
- `ky`
- `react-native-unistyles`
- TypeScript

## 프로젝트 구조

```txt
src/app/                  Expo Router 엔트리
src/features/dashboard/   대시보드 API, hook, screen, type
src/shared/components/    공통 UI
src/theme/                Unistyles 설정
```

## 실행

```bash
npm install
npm test
npm run typecheck
npm run start
```

## 품질 기준

- `npm test`: 대시보드 API/화면 계약 검증
- `npm run typecheck`: TypeScript 검증
- `npm run self-check`: 폴더 구조, `ky`, export 규칙 검증
