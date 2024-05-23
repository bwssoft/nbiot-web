import { IPackage } from '@/app/lib/definition/package';
import { useState } from 'react';

interface ConvertedPosition {
	coordinates: {
		lat: number;
		lng: number;
	};
}

export default function useMap() {
	const [initialViewState, setInitialViewState] = useState({
		longitude: -46.8499363,
		latitude: -23.4980299,
		zoom: 10,
		pitch: 0,
		bearing: 0,
	});

	// convert Packages[] to deckGl type
	function convertTrackerPositionsForDeckGl(
		packages: IPackage<{ latitude: number, longitude: number }>[],
	): ConvertedPosition[] {
		const positionsWithIcons: ConvertedPosition[] = packages.map((pack) => ({
			coordinates: {
				lat: pack.decoded.latitude,
				lng: pack.decoded.longitude,
			},
		}));

		return positionsWithIcons;
	}

	// get icon image
	function getIcon(url?: string, monitoredType?: string | undefined) {
		if (url) {
			return url;
		}
		switch (monitoredType) {
			case 'animal':
				return 'https://firebasestorage.googleapis.com/v0/b/hybridserver-48c11.appspot.com/o/Plataforma%2FVeiculos%2Fpet.svg?alt=media&token=d6d5a761-333c-4cfa-9ada-8657118124a9';

			case 'bike':
				return 'https://firebasestorage.googleapis.com/v0/b/hybridserver-48c11.appspot.com/o/Plataforma%2FVeiculos%2Fbicleta.svg?alt=media&token=9acde132-f00d-459f-ac24-31b4c155518d';

			case 'boat':
				return 'https://firebasestorage.googleapis.com/v0/b/hybridserver-48c11.appspot.com/o/Plataforma%2FVeiculos%2Fbarco.svg?alt=media&token=8aaa513d-0a1c-43d2-b633-cfa4abca31cf';

			case 'bus':
				return 'https://firebasestorage.googleapis.com/v0/b/hybridserver-48c11.appspot.com/o/Plataforma%2FVeiculos%2Fonibus.svg?alt=media&token=60d4ecc8-b6a1-422b-8bf7-32b9dfbc9e60';

			case 'car':
				return 'https://firebasestorage.googleapis.com/v0/b/hybridserver-48c11.appspot.com/o/Plataforma%2FVeiculos%2Fcar.svg?alt=media&token=677b4091-676d-4a91-9d12-481ef4199b5e';

			case 'human':
				return 'https://firebasestorage.googleapis.com/v0/b/hybridserver-48c11.appspot.com/o/Plataforma%2FVeiculos%2Fcriança.svg?alt=media&token=442d4f55-7f0b-43a8-b4c9-23d1a0feae90';

			case 'motorcycle':
				return 'https://firebasestorage.googleapis.com/v0/b/hybridserver-48c11.appspot.com/o/Plataforma%2FVeiculos%2Fmoto.svg?alt=media&token=74c12a14-9379-48aa-9511-7c392222445b';

			case 'stuff':
				return 'https://firebasestorage.googleapis.com/v0/b/hybridserver-48c11.appspot.com/o/Plataforma%2FVeiculos%2Fpacote.svg?alt=media&token=02c87ac9-c5ab-4cec-b5bb-a234680a25de';

			case 'truck':
				return 'https://firebasestorage.googleapis.com/v0/b/hybridserver-48c11.appspot.com/o/Plataforma%2FVeiculos%2Fcaminhão.svg?alt=media&token=c24c8ee1-ffae-4640-8437-8407b2f3ed55';

			default:
				return 'https://firebasestorage.googleapis.com/v0/b/hybridserver-48c11.appspot.com/o/Plataforma%2FVeiculos%2Fpinmaker.svg?alt=media&token=c461144a-ab28-4c2c-bd7a-a5dd094c66b7';
		}
	}

	return {
		convertTrackerPositionsForDeckGl,
		getIcon,
		setInitialViewState,
		initialViewState,
	};
}
