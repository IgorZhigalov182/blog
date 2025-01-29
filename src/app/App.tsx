import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppRouter } from '@/app/providers/Router';
import { getUserInited, initAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Navbar } from '@/widgets/Navbar';
import { PageLoader } from '@/widgets/PageLoader';
import { Sidebar } from '@/widgets/Sidebar';
import { ToggleFeatures } from '@/shared/lib/features';
import { MainLayout } from '@/shared/layouts/MainLayout';

function App() {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    if (!inited) {
      dispatch(initAuthData());
    }
  }, [dispatch, inited]);

  if (!inited) {
    return <PageLoader />;
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      off={
        <div
          id="app"
          className={classNames('app', {}, [theme])}
        >
          <Suspense fallback={<PageLoader />}>
            <Navbar />
            <div className="content-page">
              <Sidebar />
              <AppRouter />
            </div>
          </Suspense>
        </div>
      }
      on={
        <div
          id="app"
          className={classNames('app_redesigned', {}, [theme])}
        >
          <Suspense fallback={<PageLoader />}>
            <MainLayout
              content={<AppRouter />}
              header={<Navbar />}
              sidebar={<Sidebar />}
              toolbar={<div>123</div>}
            />
          </Suspense>
        </div>
      }
    />
  );

  // return (
  //   <div className={classNames('app', {}, [theme])}>
  //     <Suspense fallback={<PageLoader />}>
  //       <Navbar />
  //       <div className="content-page">
  //         <Sidebar />
  //         {inited && <AppRouter />}
  //       </div>
  //     </Suspense>
  //   </div>
  // );
}

export default App;
