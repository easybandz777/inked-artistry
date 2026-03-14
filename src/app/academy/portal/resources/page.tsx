import type { Metadata } from 'next';
import Link from 'next/link';
import PortalShell from '@/components/portal/PortalShell';
import { BookMarked, ClipboardList, Image, FileText, Download } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Resources | Inked Academy Portal',
    description: 'Download templates, guides, and reference materials for your PMU training.',
};

const RESOURCES = [
    {
        category: 'Reference Materials', icon: BookMarked,
        items: [
            { title: 'Course Manual PDF', desc: 'Full PMU Foundations reference guide', type: 'PDF', size: '4.2 MB' },
            { title: 'Pigment Color Theory Charts', desc: 'Undertone matching & fade prediction guides', type: 'PDF', size: '1.8 MB' },
            { title: 'Skin Science Quick Reference', desc: 'Fitzpatrick scale, skin layers, healing stages', type: 'PDF', size: '900 KB' },
            { title: 'Sanitation Protocols Checklist', desc: 'Workstation setup & sterilization procedures', type: 'PDF', size: '450 KB' },
        ],
    },
    {
        category: 'Business Templates', icon: ClipboardList,
        items: [
            { title: 'Client Intake Form', desc: 'Medical history, contraindications, consent', type: 'DOCX', size: '120 KB' },
            { title: 'Service Agreement Template', desc: 'Cancellation policy, liability waiver', type: 'DOCX', size: '95 KB' },
            { title: 'Pricing Strategy Worksheet', desc: 'Calculate your overhead and set profitable prices', type: 'XLSX', size: '65 KB' },
            { title: 'Brand Starter Kit Guide', desc: 'Logo, social media, and content creation tips', type: 'PDF', size: '2.1 MB' },
        ],
    },
    {
        category: 'Photography & Portfolio', icon: Image,
        items: [
            { title: 'Before/After Framing Guide', desc: 'Lighting setup and camera angles', type: 'PDF', size: '3.4 MB' },
            { title: 'Portfolio Curation Checklist', desc: 'What images to showcase and how', type: 'PDF', size: '380 KB' },
            { title: 'Social Media Content Calendar', desc: '30-day posting template for new artists', type: 'DOCX', size: '210 KB' },
        ],
    },
    {
        category: 'Aftercare & Client Education', icon: FileText,
        items: [
            { title: 'Client Aftercare Card Template', desc: 'Print-ready card for brow, lip, and tattoo aftercare', type: 'PDF', size: '750 KB' },
            { title: 'Touch-Up Timing Guide', desc: 'When to schedule, how to communicate', type: 'PDF', size: '290 KB' },
        ],
    },
];

const typeColors: Record<string, string> = {
    PDF: 'bg-red-50 text-red-600 border-red-100',
    DOCX: 'bg-blue-50 text-blue-600 border-blue-100',
    XLSX: 'bg-green-50 text-green-700 border-green-100',
};

export default function PortalResourcesPage() {
    return (
        <PortalShell>
            <div className="portal-header">
                <div>
                    <h1 className="portal-welcome">Resources & Downloads</h1>
                    <p className="portal-cohort">All materials included in your training package</p>
                </div>
            </div>

            <div className="portal-resources-sections">
                {RESOURCES.map((section) => (
                    <div key={section.category} className="portal-resource-section">
                        <div className="portal-resource-section-header">
                            <section.icon className="h-5 w-5 text-rose-gold" />
                            <h2 className="portal-resource-category">{section.category}</h2>
                        </div>
                        <div className="portal-resource-grid">
                            {section.items.map((item) => (
                                <div key={item.title} className="portal-resource-card">
                                    <div className="portal-resource-card-body">
                                        <p className="portal-resource-title">{item.title}</p>
                                        <p className="portal-resource-desc">{item.desc}</p>
                                    </div>
                                    <div className="portal-resource-meta">
                                        <span className={`portal-resource-type ${typeColors[item.type] ?? ''}`}>{item.type}</span>
                                        <span className="portal-resource-size">{item.size}</span>
                                        <button className="portal-resource-download" aria-label={`Download ${item.title}`}>
                                            <Download className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </PortalShell>
    );
}
