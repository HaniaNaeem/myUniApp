import React from 'react'; 
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, Linking, ImageBackground } from 'react-native';

const universities = {
  'Islamabad': [
    { name: '1. National University of Science and Technology (NUST)', link: 'https://nust.edu.pk/admissions/' },
    { name: '2. COMSATS University', link: 'https://www.comsats.edu.pk/admissions.aspx' },
    { name: '3. Foundation for Advancement of Science and Technology (FAST)', link: 'https://www.isb.nu.edu.pk/Admission/Schedule' },
    { name: '4. Air University', link: 'https://www.au.edu.pk/pages/admission/admission_schedule.aspx' },
    { name: '5. Lahore University of Management Science (LUMS)', link: 'https://admission.lums.edu.pk/' },
    { name: '6. National University of Modern Languages (NUML)', link: 'https://numl.edu.pk/admissions' },
    { name: '7. Quaid-i-Azam University', link: 'https://qau.edu.pk/message-from-the-admissions-office/' },
    { name: '8. University of Engineering and Technology (UET)', link: 'https://admissions.uettaxila.edu.pk/' },
    { name: '9. Bahria University', link: 'https://www.bahria.edu.pk/admissions/' },
    { name: '10. Foundation University', link: 'https://admissions.fui.edu.pk/#/' },
  ],
  'Lahore': [
    { name: '1. Lahore University of Management Science (LUMS)', link: 'https://admission.lums.edu.pk/' },
    { name: '2. University of Punjab (PU)', link: 'https://pu.edu.pk/home/more/4' },
    { name: '3. University of Central Punjab (UCP)', link: 'https://online-admissions.ucp.edu.pk/' },
    { name: '4. University of Engineering and Technology (UET)', link: 'https://admission.uet.edu.pk/Modules/EntryTest/Default.aspx' },
    { name: '5. University of Management and Technology (UMT)', link: 'https://admissions.umt.edu.pk/Admissions-Schedule.aspx' },
    { name: '6. University of Lahore (UOL)', link: 'https://uol.edu.pk/admissions/' },
    { name: '7. Kinnaird College for Women', link: 'https://kinnaird.edu.pk/admissions/' },
    { name: '8. University of Education', link: 'https://ue.edu.pk/admissions/2024/' },
    { name: '9. Government College University Lahore (GCUL)', link: 'https://gcu.edu.pk/admissions.php' },
    { name: '10. Minhaj University Lahore', link: 'https://admission.mul.edu.pk/' },
  ],
  'Faisalabad': [
    { name: '1. University of Agriculture Faisalabad (UAF)', link: 'http://www.admissions.uaf.edu.pk/' },
    { name: '2. Government College University Faisalabad (GCUF)', link: 'https://gcuf.edu.pk/admissions' },
    { name: '3. The University of Faisalabad (TUF)', link: 'https://admission.tuf.edu.pk/' },
    { name: '4. Foundation for Advancement of Science and Technology (FAST)', link: 'https://cfd.nu.edu.pk/admissions/' },
    { name: '5. University of Engineering and Technology (UET)', link: 'https://fsd.uet.edu.pk/' },
    { name: '6. National Textile University (NTU)', link: 'https://admissions.ntu.edu.pk/' },
    { name: '7. National University of Modern Languages (NUML)', link: 'https://www.numl.edu.pk/faisalabad/announcements/1064' },
    { name: '8. University of Education', link: 'https://www.ue.edu.pk' },
    { name: '9. Faisalabad Medical University (FMU)', link: 'https://www.pmc.gov.pk/fmu' },
    { name: '10. Virtual University (VU)', link: 'https://www.vu.edu.pk/admissions/admissionprocedure' },
  ],
};

export default function UniversityList({ route, navigation }) {
  const { city } = route.params || {};
  const cityUniversities = universities[city];

  if (!city || !cityUniversities) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>
          Invalid city selected. Please go back and choose a valid city.
        </Text>
      </View>
    );
  }

  const backgroundImages = {
    Islamabad: require('../assets/images/image5.jpg'),
    Lahore: require('../assets/images/image8.jpg'), 
    Faisalabad: require('../assets/images/image12.jpg'),
  };

  return (
    <ImageBackground
      source={backgroundImages[city] || null}
      style={[styles.background, city === 'Islamabad' && { resizeMode: 'cover' }]}
    >
      <View
        style={[
          styles.container,
          city === 'Islamabad' && { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
        ]}
      >
        <Text style={styles.title}>Universities in {city}</Text>
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={true}
        >
          {cityUniversities.map((university, index) => (
            <TouchableOpacity
              key={index}
              style={styles.universityButton}
              onPress={() => Linking.openURL(university.link)}
            >
              <Text style={styles.universityText}>{university.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
    color: '#fff',
  },
  scrollViewContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
  universityButton: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  universityText: {
    color: '#000',
    fontSize: 18,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    fontSize: 16,
  },
});
