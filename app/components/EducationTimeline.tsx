import { Timeline } from "./Timeline";
import siteMetadata from "../data/siteMetadata";

export function EducationTimeline() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative">
          <div className="divide-y divide-gray-100">
            {siteMetadata.education.map((edu) => (
              <div
                key={edu.institution}
                className="grid grid-cols-[1fr,5fr] gap-6 py-12 first:pt-0 last:pb-0 md:grid-cols-[4fr,1fr,2fr]"
              >
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">
                      {edu.degree}
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        {edu.institution}
                      </p>
                      {edu.gpa && (
                        <p className="text-sm text-gray-500">
                          GPA: {edu.gpa}
                        </p>
                      )}
                      {edu.percentage && (
                        <p className="text-sm text-gray-500">
                          Percentage: {edu.percentage}
                        </p>
                      )}
                      {edu.coursework && edu.coursework.length > 0 && (
                        <div className="mt-4">
                          <p className="mb-2 text-sm font-semibold text-gray-700">
                            Key Coursework:
                          </p>
                          <ul className="list-inside list-disc space-y-1 text-sm text-gray-600">
                            {edu.coursework.map((course, i) => (
                              <li key={i}>{course}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div />

                <div className="hidden md:block">
                  <p className="text-sm font-medium text-gray-600">{edu.period}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute top-0 h-full w-8 md:right-[calc(28%_-_1rem)]">
            <Timeline avatarUrl={siteMetadata.education[0]?.institution ? "/images/Sagar/photo3.jpg" : "/images/Sagar/photo1.jpg"} />
          </div>
        </div>
      </div>
    </div>
  );
}
