import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import enLocale from '../locals/en';
import arLocale from '../locals/ar';

const LocalizationContext = React.createContext([() => {}]);

const LocalizationProvider = ({ children }) => {
	const [locale, setLocale] = useState(enLocale);

	const switchLocale = (key) => {
		if (key === 'en') {
			document.body.style.direction = 'ltr';
			document.body.style.fontFamily = 'Roboto-Regular';
			setLocale(enLocale);
		} else {
			document.body.style.direction = 'rtl'
			document.body.style.fontFamily = 'Almarai-Regular';
			setLocale(arLocale);
		}
	};

	return (
		<LocalizationContext.Provider value={[locale.locale, switchLocale]}>
			<IntlProvider locale={locale.locale} messages={locale.messages}>
				{children}
			</IntlProvider>
		</LocalizationContext.Provider>
	);
};

export { LocalizationProvider, LocalizationContext };