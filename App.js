import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const App = () => {
  const [currentSection, setCurrentSection] = useState('name');

  const resumeData = {
    imageUrl: require('./cjane.jpg'),
    name: 'Flores, Carla Jane',
    course: 'Batchelor of Science in Information Technology',
    education: {
      elementary: 'Anibawan Burdeos Quezon',
      elementaryYear: '2014',
      highSchool: 'Mount Carmel High School',
      highSchoolYear: '2018',
      college: 'Global Reciprocal College',
      collegeYear: '2024',
    },
    about: 'I am Carla Jane Flores from Global Reciprocal College. My hobbies are reading a Wattpad story, writing a story on Wattpad, listening music, watching a anime, dramas and etc.',  
    projects:
    {
      projectName: 'PhotoshopBanner',
      imageSrc: 'banner.jpg',
      description: 'This banner project, I make on 2022 when the sports Fest in Global Reciprocal College is coming on first semester.',
    },
    contact: {
    mobile: '0977-737-3689',
    email: 'carlajane.fl0res08@gmail.com'
    },
  };

  const handlePress = () => {
    setCurrentSection((prevSection) => {
      switch (prevSection) {
        case 'name':
         return 'education';
        case 'education':
         return 'about';
        case 'about':
         return 'projects';
        case 'projects':
         return 'contact';
        case 'contact':
         return 'name';
        default:
         return 'name';
      } 
    });
  };

return (
  <SafeAreaView style={{flex: 1 }}>
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={handlePress} style={styles.contentContainer}>
        {currentSection === 'name' && (
          <>
            <Image source={resumeData.imageUrl} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.header}>{resumeData.name}</Text>
              <Text style={styles.info}>{resumeData.course}</Text>
            </View>
          </>
        )}

        {currentSection === 'education' && (
          <View style={styles.textContainer}>
            <Text style={styles.header1}>Education:</Text>
            <Text style={styles.projectTitle}>
              {'\n'}College:
              {'\n'}
            </Text>
            <Text style={styles.info1}>{resumeData.education.college}</Text>
            {'|'}
            {resumeData.education.collegeYear}

            <Text style={styles.projectTitle}>
              {'\n'}High School:
              {'\n'} 
            </Text>
            <Text style={styles.info1}>{resumeData.education.highSchool}</Text>
            {'|'}
            {resumeData.education.highSchoolYear}

            <Text style={styles.projectTitle}>
              {'\n'}Elementary:
              {'\n'} 
            </Text>
            <Text style={styles.info1}>{resumeData.education.elementary}</Text>
            {'|'}
            {resumeData.education.elementaryYear}         
          </View>
        )}

        {currentSection === 'about' && (
          <View style={styles.textContainer}>
            <Text style={styles.header1}>About me:{'\n'}</Text>
            <Text style={styles.about}>{resumeData.about}</Text>
          </View>
        )}

        {currentSection === 'projects' && (
          <View style={styles.projectsContainer}>
           <Text style={styles.header1}>Project:</Text>
           <Text style={styles.projectTitle}>{resumeData.projects.projectName}</Text>
           <Image source={require('./banner.jpg')} style={styles.projectImage} />
          <Text style={styles.projectDescription}>{resumeData.projects.description}</Text>
          </View>
       )}

        {currentSection === 'contact' && (
          <View style={styles.textContainer}>
            <Text style={styles.header1}>Contact Me:</Text>
            <Text style={styles.info1}>
              {'\n'}Mobile: {resumeData.contact.mobile}
              {'\n'}Email: {resumeData.contact.email}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    </ScrollView>
  </SafeAreaView>
);
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  textContainer: {
    marginBottom: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  header1: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  info1: {
    fontSize: 16,
  },
  about: {
    fontSize: 15,
    fontStyle: 'Calisto MT'
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  projectImage: {
    width: 300,
    height: 150,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  projectDescription: {
    fontSize: 15,
    fontStyle: 'Calisto MT'
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
});

export default App;
