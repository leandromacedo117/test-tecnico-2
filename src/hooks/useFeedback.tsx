export const useFeedback = () => {
    const { loading, error, showLoading, showError } = useContext(FeedbackContext);

    const handleError = (error: unknown) => {
        showError(error instanceof Error ? error.message : 'Erro desconhecido');
    };

    return {
        isLoading: loading,
        error,
        startLoading: () => showLoading(true),
        stopLoading: () => showLoading(false),
        handleError
    };
};