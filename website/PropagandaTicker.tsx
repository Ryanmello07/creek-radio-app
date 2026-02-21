const MESSAGES = [
  'REMINDER: Freedom is not free — it is earned through superior firepower.',
'DEFICIT SPENDING REACHES RECORD HIGHS; President assures public E-710 will lower cost of living.',
  'MANAGED DEMOCRACY WORKS — Trust your elected officials.', 'HOMELESSNESS ERADICATED as RE-EDUCATION FACILITIES EXPANDED.',
  'REPORT TREASONOUS THOUGHTS TO YOUR NEAREST DEMOCRACY OFFICER.', 'MINISTRY OF TRUTH SAYS FILES ARE ON THEIR DESK; CONFIRMS NO FILES EXIST.',
  'SUPER EARTH NEEDS YOU — Enlist today!', 'C-01 FORMS FILED AT HISTORIC LOWS; Ministry of Humanity insists everything is fine.',
  'BUG SYMPATHIZERS WILL BE RE-EDUCATED.', 'PRESIDENT BOAST STROHHMAN NEWS RATINGS are a result of his leadership.',
  'FREEDOM. JUSTICE. DEMOCRACY. EXPLOSIONS.', 'ELECTIONS POSTPONED AS FEARS OF DISSIDENT INTERFERENCE ESCALATE.',
  'THE AUTOMATONS FEAR YOUR PATRIOTISM.', 'LAWMAKERS LOWER AGE REQUIREMENT FOR LETHAL ARMS; preschools begin gun safety education.',
  'EVERY CITIZEN IS A SOLDIER — EVERY SOLDIER IS A HERO.', 'MINISTRY OF PROSPERITY URGES CITIZENS TO SPEND SUPER CREDITS; reminds Citizens SAVING IS UNDEMOCRATIC.',
  'MANAGED DEMOCRACY IS NON-NEGOTIABLE.', 'MINISTRY OF SCIENCE REJECTS DISSIDENT CONSPIRACIES alleging Terminid Engineering.',
  'LIBERTY DAY IS EVERY DAY ON SUPER EARTH.', 'MINISTRY OF DEFENSE CLAIMS FINANCIAL AUDIT WOULD BE INEFFICIENT.',
  'DO YOUR PART — SPREAD MANAGED DEMOCRACY.', 'MINISTRY OF EXPANSION PROMOTES MEGACITY DEVELOPMENT on magma worlds.',
  'THE MINISTRY OF DEFENSE REMINDS YOU: DYING FOR SUPER EARTH IS A PRIVILEGE.', 'MINISTRY OF UNITY CLAIMS fatal shootings indicate IMPROVED CRIME SOLVING.',
  'TRAITORS WILL BE LAUNCHED INTO THE SUN.', 'MISSING LAWMAKER LOCATED IN RETIREMENT HOME; retirement age raised to 100.',
  'YOUR TAX CREDITS AT WORK — FUNDING FREEDOM SINCE 2084.',
  'SLEEP WELL, CITIZEN — THE HELLDIVERS ARE WATCHING.',
  'CREEK RADIO COMMUNITY: DISCORD.GG/CREEKRADIO',
];

export function PropagandaTicker() {
  const repeatedMessages = [...MESSAGES, ...MESSAGES];
  const tickerText = repeatedMessages.join('  \u2022  ');

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full overflow-hidden bg-helldiver-bg border-b border-helldiver-borderDim">
      <div className="py-1 relative">
        <div className="ticker-scroll whitespace-nowrap">
          <span className="text-helldiver-textDim text-[10px] uppercase tracking-[0.2em] font-medium inline-block">
            {tickerText}
          </span>
        </div>
      </div>
    </div>
  );
}
