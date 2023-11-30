import { Routes, Route } from 'react-router-dom';

import DesignEdit from './components/DesignEdit';
import DesignList from './components/DesignList';
import { useQueryGetEmailTemplate } from './hooks/useQueryGetEmailTemplate';

const Dashboard = () => {
  // const { query } = useRequestProcessor();

  // const {
  //   data: template,
  //   isLoading,
  //   isError,
  // } = query(
  //   'template',
  //   () =>
  //     axiosClient
  //       .get('/upload-email-template?id=c1be5fb2-98fd-48d6-9492-d7904ca0cd4d')
  //       .then((res) => res.data),
  //   {
  //     enabled: true,
  //   }
  // );

  const { data: template, isLoading } = useQueryGetEmailTemplate(
    'c1be5fb2-98fd-48d6-9492-d7904ca0cd4d'
  );

  return (
    <Routes>
      <Route path="/" element={<DesignList />} />
      {isLoading ? (
        <></>
      ) : (
        <>
          <Route
            path={`/design/new`}
            element={<DesignEdit template={template} />}
          />
          <Route
            path={`/design/edit/:designId`}
            element={<DesignEdit template={template} />}
          />
        </>
      )}
    </Routes>
  );
};

export default Dashboard;
