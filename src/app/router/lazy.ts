import { lazy } from 'react';

export const MainPage = lazy(() => import('@page/main-page'));
export const MyPage = lazy(() => import('@page/my/my-page'));
export const NickNamePAge = lazy(() => import('@page/my/nickName-change'));
export const CreatPage = lazy(() => import('@page/create-page'));
export const PostDetailPage = lazy(() => import('@page/post-detail-page'));
