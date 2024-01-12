


interface FxRate {
    getFxRate(fromCurrency: string, toCurrency: string): any;
}

class RemoteFxRate implements FxRate {
    getFxRate(fromCurrency: string, toCurrency: string) {
        throw new Error("Method not implemented.");
    }

}

class LocalFxRate implements FxRate {
    async getFxRate(fromCurrency: string, toCurrency: string) {

        const apiKey = "b13b27b1da-a9b2f1fc15-s7589i"
        const endpoint = `https://api.fastforex.io/fetch-one?from=${fromCurrency}&to=${toCurrency}&api_key=${apiKey}`;

        try {
            const response = await fetch(endpoint);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            console.log('API Response:', data);
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw new Error('Error fetching data:' + error);
        }

    }

}

