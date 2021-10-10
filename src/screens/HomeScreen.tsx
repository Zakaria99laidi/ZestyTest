import React, {FC, useState} from 'react';
import {
  FlatList,
  Keyboard,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import * as Yup from 'yup';

import {AppForm, FormField, SubmitButton} from '../components/forms';
import Post from '../components/Post';
import colors from '../config/colors';
import imageApi from '../api/image';
import ActivityIndicator from '../components/ActivityIndicator';

interface post {
  title: string;
  image: string;
}
type MyFormValues = {
  inputField: string;
};

const initialPosts: post[] = [
  {
    title: 'Hello World',
    image: 'https://coffee.alexflipnote.dev/ZMe91-W9O-w_coffee.jpg',
  },
  {
    title: 'Comments ça va?',
    image: 'https://coffee.alexflipnote.dev/BTFx8PS97yA_coffee.jpg',
  },
  {
    title: 'how is go',
    image: 'https://coffee.alexflipnote.dev/CKiYDslaLHU_coffee.png',
  },
];

const validationSchema = Yup.object().shape({
  inputField: Yup.string()
    .required("tu devrais taper n'importe quoi ici")
    .label('Input Field'),
});

const HomeScreen: FC<{}> = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const initialValues: MyFormValues = {
    inputField: '',
  };

  const [posts, setPosts] = useState(initialPosts);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async ({inputField}: MyFormValues, {resetForm}) => {
    try {
      Keyboard.dismiss();

      setLoading(true);
      const data = await imageApi.getImage();
      setPosts([{title: inputField, image: data.file}, ...posts]);
      setLoading(false);
      resetForm();
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <>
      <SafeAreaView style={[styles.container]}>
        <StatusBar />
        <AppForm
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}>
          <FormField
            name="inputField"
            placeholder="Quoi de neuf?"
            style={styles.inputField}
          />
          <SubmitButton title="publier" width="40%" style={styles.Button} />
        </AppForm>

        <FlatList
          data={posts}
          keyExtractor={item => item.title + item.image}
          renderItem={({item}) => (
            <Post title={item.title} image={item.image} style={styles.post} />
          )}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
      <ActivityIndicator visible={loading} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 30,
  },
  inputField: {
    marginVertical: 10,
  },
  Button: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  post: {
    marginBottom: 30,
  },
});

export default HomeScreen;
