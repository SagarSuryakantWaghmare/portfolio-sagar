import { Timeline } from "./Timeline";
import siteMetadata from "../data/siteMetadata";

export function EducationTimeline() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative">
          <div className="divide-y divide-gray-100">
            {siteMetadata.education.map((edu, index) => (
              <div
                key={edu.institution}
                className="grid grid-cols-[5fr,1fr] gap-6 py-12 first:pt-0 last:pb-0 md:grid-cols-[4fr,1fr,2fr]"
              >
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="md:hidden">
                      <h3 className="text-xl font-bold">{edu.degree}</h3>
                      <p className="text-sm text-gray-600">{edu.period}</p>
                    </div>
                    <h4 className="hidden text-lg font-semibold md:block">
                      {edu.degree}
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        {edu.institution}
                      </p>
                      {edu.gpa && (
                        <p className="text-gray-600">
                          <span className="font-semibold">GPA:</span> {edu.gpa}
                        </p>
                      )}
                      {edu.percentage && (
                        <p className="text-gray-600">
                          <span className="font-semibold">Percentage:</span> {edu.percentage}
                        </p>
                      )}
                      {edu.subject && (
                        <p className="text-gray-600">
                          <span className="font-semibold">Subject:</span> {edu.subject}
                        </p>
                      )}
                      {edu.coursework && edu.coursework.length > 0 && (
                        <div className="space-y-2">
                          <p className="font-semibold text-gray-700">
                            Key Coursework:
                          </p>
                          <div className="space-y-3">
                            {edu.coursework.map((course, i) => (
                              <p key={i} className="text-gray-600">{course}</p>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div />

                <div className="hidden md:block">
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <p className="text-sm text-gray-600">{edu.period}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden md:block absolute top-0 h-full w-8 md:right-[calc(28%_-_1rem)]">
            <Timeline avatarUrl="/images/Sagar/photo3.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}
