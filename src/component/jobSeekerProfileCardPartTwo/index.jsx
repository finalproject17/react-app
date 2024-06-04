import styles from './style.module.css'
import SmallJobSeekerProfileCard from '../SmallJobSeekerProfileCard'
import PrimaryButton from '../../component/primaryButton'

function JobSeekerProfileCardPartTwo() {
  return (
  
    <div>
    <div className={styles.container}>
<div className={styles.otherCandidates}>Other Candidates</div>
<SmallJobSeekerProfileCard src={'1.svg'} title={'Julia Ark'} subTitle={'Graphic Designer'} additionalClass={styles.firstProfile}/>
<SmallJobSeekerProfileCard src={'3.svg'} title={'Julia Ark'} subTitle={'Graphic Designer'} additionalClass={styles.fProfile}/>
<SmallJobSeekerProfileCard src={'4.svg'} title={'Julia Ark'} subTitle={'Graphic Designer'}additionalClass={styles.fProfile}/>
<SmallJobSeekerProfileCard src={'5.svg'} title={'Julia Ark'} subTitle={'Graphic Designer'}additionalClass={styles.fProfile}/>
<SmallJobSeekerProfileCard src={'3.svg'} title={'Julia Ark'} subTitle={'Graphic Designer'}additionalClass={styles.fProfile}/>
<div  className={styles.btnContainer}><PrimaryButton name={'Show More'} additionalClass={ styles.btn} /></div></div>
    </div>
    
   
  )
}

export default JobSeekerProfileCardPartTwo