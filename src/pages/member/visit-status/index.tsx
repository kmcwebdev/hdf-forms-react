import { useEffect } from 'react';
import { useStore } from 'src/store';

const VisitStatus: React.FC = () => {
  const {
    setForm,
    setShowForm,
    setEmail,
    setPersonalInformation,
    setWorkType,
    setAuthorized,
    setVisitInformation,
  } = useStore();

  useEffect(() => {
    return () => {
      setForm(null);
      setShowForm(false);
      setEmail(null);
      setPersonalInformation(null);
      setWorkType(null);
      setAuthorized(false);
      setVisitInformation(null);
    };
  }, []);

  return <>VisitStatus</>;
};

export default VisitStatus;
