import styles from './directory.module.css';
import React from 'react';
import CategoryItem from '../category-item/category-item.component';

const Directory = ({categories}) =>{
    return(
        <div className={styles.directoryContainer}>
          {categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
            ))}
        </div>
    );
};

export default Directory;