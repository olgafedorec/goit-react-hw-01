import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
    
return (
    <div className={css.container}>
    <div className={css.infoContainer}>
      <img className={css.img}
        src={image}
        alt="User avatar"
        height="150"
      />
      <p className={css.name}>{name}</p>
      <p className={css.info}>@{tag}</p>
      <p className={css.info}>{location}</p>
    </div>
    <div className={css.statsWrapper}>
    <ul className={css.list}>
    <li className={css.listItem}>
      <span className={css.statsName}>Followers </span>
      <span className={css.count}>{stats.followers}</span>
    </li>
        <li className={css.listItem}>
          <span className={css.statsName}>Views</span>
          <span className={css.count}>{stats.views}</span>
    </li>
        <li className={css.listItem}>
          <span className={css.statsName}>Likes</span>
          <span className={css.count}>{stats.likes}</span>
    </li>
    </ul>
    </div>
    
  </div>
  
)
}



