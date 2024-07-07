import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchUsers } from '../../store/Slices/usersSlice';
import SmallJobSeekerProfileCard from '../SmallJobSeekerProfileCard';
import PrimaryButton from '../../component/primaryButton';
import styles from './style.module.css';
import { getAllUsersAction } from '../../store/Slices/usersSlice';
import Loader from '../Loader';

const JobSeekerProfileCardPartTwo = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users || []);
  const status = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  const [visibleUsersCount, setVisibleUsersCount] = useState(5);

  useEffect(() => {
    dispatch(getAllUsersAction());
  }, [dispatch]);

  const handleShowMore = () => {
    setVisibleUsersCount((prevCount) => prevCount + 5);
  };

  if (status === true) {
    return <Loader />;
  }

  if (status === false && error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.otherCandidates}>Other Candidates</div>
      {users.length > 0 ? (
        users.slice(0, visibleUsersCount).map((user) => (
          <SmallJobSeekerProfileCard
            key={user._id}
            src={user.profilePhoto || 'defaultProfilePicture.svg'}
            title={`${user.firstName} ${user.lastName}`}
            subTitle={user.desiredJobType || 'No job type specified'}
          />
        ))
      ) : (
        <div>No users found</div>
      )}
      <div className={styles.btnContainer}>
        {visibleUsersCount < users.length && (
          <PrimaryButton name={'Show More'} additionalClass={styles.btn} onClick={handleShowMore} />
        )}
      </div>
    </div>
  );
};

export default JobSeekerProfileCardPartTwo;
