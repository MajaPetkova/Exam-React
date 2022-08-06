import styles from './Home.module.css'
const Home = () => {
    return (
        <section className={styles['hero_section']}>
            <div className={styles['hero-container']}>
                <div className={styles['hero_detail-box']}>
                    <h2>
                        Best way
                        to learn and have fun
                    </h2>
                    <h3>What do you like to do in your free time? </h3>
                    <p>
                        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam
                    </p>
                    <h3>Want to see the upcoming events...</h3>
                    <div className={styles['hero_btn-continer']}>
                        
                        <button type="click" className={styles['btn-start']}>Let's start</button>

                    </div>
                </div>
                <div className={styles['hero_img-container']}>
                    <div>
                        <img src="./images/happy-little-children-having-fun-vector.jpg" alt="" className="img-fluid" />
                       
                   
                   
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Home;