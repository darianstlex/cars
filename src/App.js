import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { imagesService } from './services/images';
import { Gallery } from './components/Gallery';
import { Navigation } from './components/Navgation';
import { RegisterForm } from './components/RegisterForm';

export const App = () => {
  useEffect(() => {
    try {
      imagesService.getImages(20);
    } catch (e) {
      console.error('Error:', e);
    }
  }, [])

  const images = useStore(imagesService.$);

  return (
    <>
      <Navigation/>
      <Switch>
        <Route path="/" exact>
          <Gallery images={images}/>
        </Route>
        <Route path="/form" exact>
          <RegisterForm />
        </Route>
        <Route path="*">
          <Redirect to="/"/>
        </Route>
      </Switch>
    </>
  );
}
