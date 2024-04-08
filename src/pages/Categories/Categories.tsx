//     import React from 'react';
//     import { useSelector, useDispatch } from 'react-redux';
//     import axios from 'axios';

//     const Categories: React.FC = () => {
//     const formData = useSelector((state: any) => state.auth.formData);
//     const dispatch = useDispatch();

//     const saveFormData = (e) => {
//        e.preventDefault();
//        axios.post('http://localhost:3001/users', {
//     firstName: formData.firstName,
//     lastName: formData.lastName,
//     email: formData.email,
//     location: formData.location,
//     username: formData.username,
//     password: formData.password
// })
// .then(result => console.log(result))
// .catch(err => console.log(err));
//     };

//     return (
//         <div>
//         <h1>Form Data</h1>
//         <p>First Name: {formData.firstName}</p>
//         <p>Last Name: {formData.lastName}</p>
//         <p>Email: {formData.email}</p>
//         <p>Location: {formData.location}</p>
//         <p>Username: {formData.username}</p>
//         <p>Password: {formData.password}</p>
//         <p>Confirm Password: {formData.confirmPassword}</p>
//         <button onClick={saveFormData}>Save Form Data</button>
//         </div>
//     );
//     };

//     export default Categories;




import React, { useState } from 'react';
    import { useSelector, useDispatch } from 'react-redux';
    import axios from 'axios';
    import wallet from "../../images/Categories/wallet.svg";
    import Travel from "../../images/Categories/Travel.png";
    import Brands from "../../images/Categories/Group.png";
    import ArtDesign from "../../images/Categories/ArtDesign.png";
    import Book from "../../images/Categories/Book.png";
    import Games from "../../images/Categories/Games.png";
    import FoodandDrinks from "../../images/Categories/FoodandDrinks.png";
    import Cars from "../../images/Categories/Cars.png";
    import Species from "../../images/Categories/Species.png";
    import celebrity from "../../images/Categories/celebrity.png";
    import colorpalette from "../../images/Categories/color-palette.png";
    import fashion from "../../images/Categories/fashion.png";
    import firstaidkit from "../../images/Categories/first-aid-kit.png";
    import Group  from "../../images/Categories/Group .png";
    import intrested from "../../images/Categories/intrested.png";
    import movies from "../../images/Categories/movies.png";
    import music from "../../images/Categories/music.png";
    import rolemodels from "../../images/Categories/rolemodels.png";
    import quotes from "../../images/Categories/quotes.png";
    import technology from "../../images/Categories/technology.png";
    import videos from "../../images/Categories/videos.png";
    import television from "../../images/Categories/television.png";
    import memes from "../../images/Categories/memes.png";
    import photos from "../../images/Categories/photos.png";
    import Outline from "../../images/Categories/Outline.png";
    import "../../css/Categories.css";
    import { Link } from 'react-router-dom';


    const Categories: React.FC = () => {
        const [selected, setSelected] = useState([]);

        const categories = [
          { name: "Travel", image: Travel },
          { name: "Brands", image: Brands },
          { name: "Art/Design", image: ArtDesign },
          { name: "Books", image: Book },
          { name: "Games", image: Games },
          { name: "Food & Drinks", image: FoodandDrinks },
          { name: "Cars", image: Cars },
          { name: "Species", image: Species },
          { name: "Colors", image: colorpalette },
          { name: "Celebrities", image: celebrity },
          { name: "Songs", image: music },
          { name: "Health", image: firstaidkit },
          { name: "Sports", image: Outline },
          { name: "Technology", image: technology },
          { name: "Bikes", image: Group },
          { name: "Web Series", image: television },
           { name: "videos", image: videos },
           { name: "fashion", image: fashion },
           { name: "memes", image: memes },
          { name: "rolemodels", image: rolemodels },
          { name: "intrested", image: intrested },
          { name: "Photos", image: photos },
          { name: "quotes", image: quotes },
          { name: "movies", image: movies }
        ];
      
        const toggleSelected = (index) => {
          const selectedIndex = selected.indexOf(index);
          if (selectedIndex === -1) {
            setSelected([...selected, index]);
          } else {
            setSelected(selected.filter((i) => i !== index));
          }
        };
      
      const renderCategories = () => {
        const renderedCategories = [];
        for (let i = 0; i < categories.length; i += 2) {
          const firstIndex = i;
          const secondIndex = i + 1;
          renderedCategories.push(
            <div key={i} className="col-3 d-flex justify-content-center align-items-center">
           
                <div
                  className="card text-center mb-3 mx-3"
                  style={{cursor:'pointer', width: "16rem", height: "13rem", borderRadius: "20px",background: selected.includes(firstIndex) ? '#ffffff' : "#F5F5F5", border: selected.includes(firstIndex) ? ' 2px solid #4B0082' : "" ,position:'relative' }}
                  onClick={() => toggleSelected(firstIndex)}
                >
                  <div className="card-body d-flex justify-content-center align-items-center">
                    <div>
                      <img src={categories[firstIndex].image} className="img-fluid" alt={categories[firstIndex].name} style={{ width: "3vw" }} />
                      <p className="lead mt-3" style={{ color: "#343434", fontFamily: "Poppins, Arial, sans-serif", fontSize: "15px", lineHeight: "1.2", fontWeight: "500" }}>{categories[firstIndex].name}</p>
                    </div>
                    {selected.includes(firstIndex) && (
        <div
          className="translate-middle badge d-flex justify-content-center align-items-center" 
          style={{
            position: 'absolute',
            right: '0',
            top: '10%',
            backgroundColor: '#4B0082',
            fontSize: '15px',
            borderRadius: '50%', 
            width: '30px', 
            height: '30px',
            padding: '7px 10px',
            color: 'white', 
          }}
        >
          {selected.indexOf(firstIndex) + 1}
        </div>
      )}
      
                  </div>
                </div>
                
                {categories[secondIndex] && (
                  <div
                  className="card text-center mb-3 mx-3"
                    style={{cursor:'pointer', width: "16rem", height: "13rem", borderRadius: "20px",background: selected.includes(secondIndex) ? '#ffffff' : "#F5F5F5", border: selected.includes(secondIndex) ? ' 2px solid #4B0082' : ""  }}
                    onClick={() => toggleSelected(secondIndex)}
                  >
                    <div className="card-body d-flex justify-content-center align-items-center">
                      <div>
                        <img src={categories[secondIndex].image} className="img-fluid" alt={categories[secondIndex].name} style={{ width: "3vw" }} />
                        <p className="lead mt-3" style={{ color: "#343434", fontFamily: "Poppins, Arial, sans-serif", fontSize: "15px", lineHeight: "1.2", fontWeight: "500" }}>{categories[secondIndex].name}</p>
                      </div>
                      {selected.includes(secondIndex) && (
        <div
          className="translate-middle badge d-flex justify-content-center align-items-center" 
          style={{
            position: 'absolute',
            right: '0',
            top: '10%',
            backgroundColor: '#4B0082',
            fontSize: '15px',
            borderRadius: '50%', 
            width: '30px', 
            height: '30px',
            padding: '7px 10px',
            color: 'white', 
          }}
        >
          {selected.indexOf(secondIndex) + 1}
        </div>
      )}
                    </div>
                  </div>
                )}
            </div>
          );
        }
        return renderedCategories;
      };
      
        return (
            <div className='container-fluid'>
            <nav className="navbar navbar-expand-lg ">
              <div className="container-fluid">
                <a className="navbar-brand" style={{ color: 'rgba(75, 0, 130, 1)', fontFamily: 'Poppins, Arial, sans-serif', fontSize: '30px', lineHeight: '67.5px', fontWeight: '600', textTransform: 'uppercase' }}>Denaurlen</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <span className="nav-link lead ms-5" style={{ color: "#343434", fontFamily: "Poppins, Arial, sans-serif", fontSize: "20px", lineHeight: "45px", fontWeight: "500" }}>Categories</span>
                    </li>
                  </ul>
                  <div className="navbar-text text-white px-4 d-flex justify-content-center align-items-center" style={{ background: '#4B0082', borderRadius: '30px' }}>
                    <img src={wallet} className="img-fluid" alt="Wallet" />
                    <span className='fw-bold ms-1' style={{ fontSize: '18px' }}>6000</span>
                  </div>
                </div>
              </div>
            </nav>
      
            <div className="d-flex text-center">
              <div className="d-flex w-100 h-100 p-3 mx-auto flex-column">
                <main className="px-3 container-fluid">
                  <div className="py-3" style={{ backgroundColor: '#EDD3FF', lineHeight: '22px' }}>Choose your top @ 10 categories</div>
                  <div className="row mt-4">
                    {renderCategories()}
                  </div>
                  <Link  to="/suggestions" className="btn text-white px-5 py-3 mt-5" style={{ background: 'rgba(75, 0, 130, 1)',fontSize:'20px' }}>Next</Link>
                </main>
              </div>
            </div>
          </div>
        );
    };

    export default Categories;
