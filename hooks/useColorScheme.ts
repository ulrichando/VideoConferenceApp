// ../hooks/useColorScheme.ts
import { useState, useEffect } from 'react';
import { Appearance, ColorSchemeName } from 'react-native';

export default function useColorScheme(): NonNullable<ColorSchemeName> {
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setColorScheme(colorScheme);
    });

    return () => subscription.remove();
  }, []);

  return colorScheme || 'light';
}
