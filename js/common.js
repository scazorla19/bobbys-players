const mergeAndRemoveNull = (...args) => {
    const result = videojs.mergeOptions(...args);
    // Any header whose value is `null` will be removed.
    Object.keys(result).forEach(k => {
        if (result[k] === null) {
        delete result[k];
        }
    });
    return result;
};

function persistAll() {
    document.querySelectorAll('[data-persist]').forEach((elem) => {
        localStorage.setItem(elem.dataset.persist, elem.value);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Restore from cache
    document.querySelectorAll('[data-persist]').forEach((elem) => {
        const saved = localStorage.getItem(elem.dataset.persist);
        if (!!saved) {
            elem.value = saved;
        }
    });
    // Bind Example Manifests
    const manifest_targets = document.querySelectorAll('[data-manifest-target]');
    document.querySelectorAll('[data-example-manifest]').forEach((btn) => {
        btn.onclick = () => {
            manifest_targets.forEach((target) => {
                target.value = btn.dataset.exampleManifest;
            });
        };
    });
});