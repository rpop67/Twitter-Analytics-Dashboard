export const xquikSentimentSummary = {
	negative: 6267,
	neutral: 11431,
	positive: 14466
};

export function createXquikSentimentDoughnut(summary = xquikSentimentSummary) {
	return {
		labels: ['Positive Tweets', 'Negative Tweets', 'Neutral Tweets'],
		datasets: [
			{
				label: ['Positive', 'Negative', 'Neutral'],
				backgroundColor: ['#414f4f', '#587a7a', '#67a3a3'],
				hoverBackgroundColor: ['#3a9e6c', '#d43c3c', '#272928'],
				data: [summary.positive, summary.negative, summary.neutral]
			}
		]
	};
}

export function summarizeXquikTweets(tweets = []) {
	return tweets.reduce(
		(summary, tweet) => {
			const sentiment = String(tweet.sentiment || tweet.polarity || 'neutral').toLowerCase();

			if (sentiment.includes('positive')) {
				return { ...summary, positive: summary.positive + 1 };
			}

			if (sentiment.includes('negative')) {
				return { ...summary, negative: summary.negative + 1 };
			}

			return { ...summary, neutral: summary.neutral + 1 };
		},
		{ negative: 0, neutral: 0, positive: 0 }
	);
}
