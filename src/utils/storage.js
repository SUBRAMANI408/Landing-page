const STORAGE_KEY = 'natsc_2026_registrations';
const RECENT_REG_KEY = 'natsc_2026_current_registration';

// Initial sample mock registrations to show realistic activity in admin/participant lookup
const initialSampleRegistrations = [
  {
    registrationId: 'NATSC26-KID-10452',
    fullName: 'Aarav Sharma',
    dob: '2015-08-14',
    gender: 'Male',
    email: 'aarav.sharma.parent@example.com',
    mobile: '9876543210',
    address: 'Flat 402, Shivalik Residency, Green Park',
    city: 'New Delhi',
    state: 'Delhi',
    category: 'Kids',
    competitionId: 'kid-athletics',
    competitionName: 'Junior Athletics Championship (60m & 100m)',
    venue: 'Main Stadium - Track A',
    eventDate: '2026-12-12',
    eventTime: '08:30 AM IST',
    fee: 100,
    emergencyContactName: 'Rajesh Sharma',
    emergencyRelationship: 'Father',
    emergencyPhone: '9876543211',
    createdAt: '2026-10-02T10:15:00Z',
    status: 'Confirmed'
  },
  {
    registrationId: 'NATSC26-MID-38291',
    fullName: 'Dr. Meenakshi Raman',
    dob: '1979-04-22',
    gender: 'Female',
    email: 'meenakshi.raman@example.com',
    mobile: '9840123456',
    address: '14, Temple Avenue, Anna Nagar',
    city: 'Chennai',
    state: 'Tamil Nadu',
    category: 'Middle Age',
    competitionId: 'mid-walking',
    competitionName: '5K Master Walking Challenge & Fitness Sprint',
    venue: 'Main Stadium - Olympic Track & Outer Perimeter',
    eventDate: '2026-12-12',
    eventTime: '06:30 AM IST',
    fee: 150,
    emergencyContactName: 'Karthik Raman',
    emergencyRelationship: 'Spouse',
    emergencyPhone: '9840199999',
    createdAt: '2026-10-04T14:30:00Z',
    status: 'Confirmed'
  },
  {
    registrationId: 'NATSC26-U35-82914',
    fullName: 'Rohan Deshmukh',
    dob: '2001-11-09',
    gender: 'Male',
    email: 'rohan.deshmukh@example.com',
    mobile: '9123456789',
    address: 'B-12, Mayur Vihar Extension',
    city: 'Pune',
    state: 'Maharashtra',
    category: 'Under 35',
    competitionId: 'u35-coding',
    competitionName: 'National Algorithmic Coding & Hackathon Sprint',
    venue: 'Dr. APJ Abdul Kalam Tech Centre - Labs A & B',
    eventDate: '2026-12-13',
    eventTime: '10:00 AM IST',
    fee: 150,
    emergencyContactName: 'Sunil Deshmukh',
    emergencyRelationship: 'Father',
    emergencyPhone: '9123456780',
    createdAt: '2026-10-05T09:45:00Z',
    status: 'Confirmed'
  }
];

export const getStoredRegistrations = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialSampleRegistrations));
      return initialSampleRegistrations;
    }
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to read registrations from localStorage:', e);
    return initialSampleRegistrations;
  }
};

export const saveNewRegistration = (data) => {
  try {
    const existing = getStoredRegistrations();
    const prefix = data.category === 'Kids' ? 'KID' : data.category === 'Middle Age' ? 'MID' : 'U35';
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const regId = `NATSC26-${prefix}-${randomNum}`;

    const completeRecord = {
      ...data,
      registrationId: regId,
      createdAt: new Date().toISOString(),
      status: 'Confirmed'
    };

    const updated = [completeRecord, ...existing];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    localStorage.setItem(RECENT_REG_KEY, JSON.stringify(completeRecord));
    return completeRecord;
  } catch (e) {
    console.error('Failed to save registration:', e);
    return null;
  }
};

export const getLatestRegistration = () => {
  try {
    const raw = localStorage.getItem(RECENT_REG_KEY);
    if (raw) return JSON.parse(raw);
    const all = getStoredRegistrations();
    return all[0] || null;
  } catch (e) {
    return null;
  }
};
