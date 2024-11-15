import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from '@/app/providers/Router';
import { Navbar } from '@/widgets/Navbar';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Sidebar } from '@/widgets/Sidebar';
import { getUserInited, userActions } from '@/entities/User';
import { PageLoader } from '@/widgets/PageLoader';
import { useTheme } from '@/shared/lib/hooks';

function App() {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {inited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
}

export default App;

