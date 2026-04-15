const toneClasses = {
    beta: 'bg-beta text-beta-white ring-beta/20',
    alpha: 'bg-alpha text-beta-white ring-alpha/20',
    gold: 'bg-gold text-beta-white ring-gold/20',
    alphaGreen: 'bg-alpha-green text-beta-white ring-alpha-green/20',
    alphaRed: 'bg-alpha-red text-beta-white ring-alpha-red/20',
};

export function getToneClass(tone) {
    return toneClasses[tone] ?? toneClasses.beta;
}

