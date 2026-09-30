import React from 'react';
import { ScrollView, View } from 'react-native';
import { useFonts } from 'expo-font';
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import { Caveat_400Regular } from '@expo-google-fonts/caveat';
import { ArefRuqaa_400Regular } from '@expo-google-fonts/aref-ruqaa';

import { Header } from './src/components/layout/Header';
import { Footer } from './src/components/layout/Footer';
import { WhatsAppButton } from './src/components/layout/WhatsAppButton';
import { Hero } from './src/components/sections/Hero';
import { Stats } from './src/components/sections/Stats';
import { About } from './src/components/sections/About';
import { Services } from './src/components/sections/Services';
import { Advantages } from './src/components/sections/Advantages';
import { Plans } from './src/components/sections/Plans';
import { Process } from './src/components/sections/Process';
import { Testimonials } from './src/components/sections/Testimonials';
import { Faq } from './src/components/sections/Faq';
import { CtaBanner } from './src/components/sections/CtaBanner';
import { COLORS } from './src/constants/theme';
import './global.css';

export default function App() {
  const [fontsLoaded] = useFonts({
    DM_Serif_Display: DMSerifDisplay_400Regular,
    Inter: Inter_400Regular,
    Inter_Medium: Inter_500Medium,
    Inter_SemiBold: Inter_600SemiBold,
    Inter_Bold: Inter_700Bold,
    Caveat: Caveat_400Regular,
    Aref_Ruqaa: ArefRuqaa_400Regular,
  });

  if (!fontsLoaded) {
    return <View style={{ flex: 1, backgroundColor: COLORS.cream50 }} />;
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.cream50 }}>
      <Header />
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View role="main" aria-label="Main content">
          <Hero />
          <Stats />
          <About />
          <Services />
          <Advantages />
          <Plans />
          <Process />
          <Testimonials />
          <Faq />
          <CtaBanner />
        </View>
        <Footer />
      </ScrollView>
      <WhatsAppButton />
    </View>
  );
}