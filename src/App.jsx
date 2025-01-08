import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import { Header } from '../../widgets';
// import { Footer } from '../../widgets/footer/Footer';
import './App.css';
import Study from './pages/StudyPages/Study';
import Article from './pages/ui/publication/ArticlePage';

function App() {
    const routesArr = [
      {
        path : '/articlePage',
        element: <Article/>
      }
      
    ]

    return (
        <BrowserRouter>
          
            <Routes>
                <Route index element={<Study />} />  
                {routesArr?.map((item, index) => (
                    <Route key={index} path={item.path} element={item.element} />
                ))}
            </Routes>
        
        </BrowserRouter>
    );
}

export default App;
